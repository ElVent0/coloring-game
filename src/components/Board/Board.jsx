import { BoardStyled, List, Item, Button } from "./Board.styled";
import { useState, useEffect } from "react";

const Board = () => {
  const [data, setData] = useState(null);
  const [userColor, setUserColor] = useState(null);

  const handleData = async () => {
    try {
      fetch("http://localhost:3000/api/table/")
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result.result);
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
  }, []);

  const handleClick = (id, color) => {
    fetch(`http://localhost:3000/api/table/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        color: color,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      {data !== null && (
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
      )}
    </>
  );
};

export default Board;
