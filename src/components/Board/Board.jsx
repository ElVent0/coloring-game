import { BoardStyled, List, Item, Button } from "./Board.styled";
import Loader from "../Loader/Loader";
import { useState, useEffect } from "react";

const { REACT_APP_API_URL } = process.env;

const Board = () => {
  const [data, setData] = useState(null);
  const [userColor, setUserColor] = useState(null);

  const handleData = async () => {
    try {
      fetch(`${REACT_APP_API_URL}/api/table/`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          // console.log("Start data", result.result);
          setData(result.result);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleColor = async () => {
    try {
      if (localStorage.getItem("randomUserColorForGame")) {
        setUserColor(localStorage.getItem("randomUserColorForGame"));
      } else {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        const newColor = localStorage.setItem(
          "randomUserColorForGame",
          `#${randomColor}`
        );
        setUserColor(newColor);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleData();
    handleColor();
    const ws = new WebSocket("ws://localhost:5000");
    ws.onopen = () => {
      // console.log("Connected frontend");
    };
    ws.onmessage = (e) => {
      if (data !== JSON.parse(e.data)) {
        setData(JSON.parse(e.data));
      }
    };
  }, [data]);

  const handleClick = (id, color) => {
    fetch(`${REACT_APP_API_URL}/api/table/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        color: color,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        // return response.json();
      })
      .then((data) => {
        // console.log("Data after click", data);
      });
  };

  return (
    <>
      {data !== null ? (
        <BoardStyled>
          <List>
            {data.map((item) => {
              return (
                <Item key={item._id}>
                  <Button
                    onClick={() => handleClick(item._id, userColor)}
                    style={{ backgroundColor: item.color }}
                  ></Button>
                </Item>
              );
            })}
          </List>
        </BoardStyled>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Board;
