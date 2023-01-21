import { BoardStyled, List, Item, Button } from "./Board.styled";
import { useState, useEffect } from "react";

const Board = () => {
  const startData = [
    { id: 1, color: "#fff" },
    { id: 2, color: "#fff" },
    { id: 3, color: "#fff" },
    { id: 4, color: "#fff" },
    { id: 5, color: "#fff" },
    { id: 6, color: "#fff" },
    { id: 7, color: "#fff" },
    { id: 8, color: "#fff" },
    { id: 9, color: "#fff" },
    { id: 10, color: "#fff" },
    { id: 11, color: "#fff" },
    { id: 12, color: "#fff" },
    { id: 13, color: "#fff" },
    { id: 14, color: "#fff" },
    { id: 15, color: "#fff" },
    { id: 16, color: "#fff" },
    { id: 17, color: "#fff" },
    { id: 18, color: "#fff" },
    { id: 19, color: "#fff" },
    { id: 20, color: "#fff" },
    { id: 21, color: "#fff" },
    { id: 22, color: "#fff" },
    { id: 23, color: "#fff" },
    { id: 24, color: "#fff" },
    { id: 25, color: "#fff" },
    { id: 26, color: "#fff" },
    { id: 27, color: "#fff" },
    { id: 28, color: "#fff" },
    { id: 29, color: "#fff" },
    { id: 30, color: "#fff" },
    { id: 31, color: "#fff" },
    { id: 32, color: "#fff" },
    { id: 33, color: "#fff" },
    { id: 34, color: "#fff" },
    { id: 35, color: "#fff" },
    { id: 36, color: "#fff" },
    { id: 37, color: "#fff" },
    { id: 38, color: "#fff" },
    { id: 39, color: "#fff" },
    { id: 40, color: "#fff" },
    { id: 41, color: "#fff" },
    { id: 42, color: "#fff" },
    { id: 43, color: "#fff" },
    { id: 44, color: "#fff" },
    { id: 45, color: "#fff" },
    { id: 46, color: "#fff" },
    { id: 47, color: "#fff" },
    { id: 48, color: "#fff" },
    { id: 49, color: "#fff" },
    { id: 50, color: "#fff" },
    { id: 51, color: "#fff" },
    { id: 52, color: "#fff" },
    { id: 53, color: "#fff" },
    { id: 54, color: "#fff" },
    { id: 55, color: "#fff" },
    { id: 56, color: "#fff" },
    { id: 57, color: "#fff" },
    { id: 58, color: "#fff" },
    { id: 59, color: "#fff" },
    { id: 60, color: "#fff" },
    { id: 61, color: "#fff" },
    { id: 62, color: "#fff" },
    { id: 63, color: "#fff" },
    { id: 64, color: "#fff" },
    { id: 65, color: "#fff" },
    { id: 66, color: "#fff" },
    { id: 67, color: "#fff" },
    { id: 68, color: "#fff" },
    { id: 69, color: "#fff" },
    { id: 70, color: "#fff" },
    { id: 71, color: "#fff" },
    { id: 72, color: "#fff" },
    { id: 73, color: "#fff" },
    { id: 74, color: "#fff" },
    { id: 75, color: "#fff" },
    { id: 76, color: "#fff" },
    { id: 77, color: "#fff" },
    { id: 78, color: "#fff" },
    { id: 79, color: "#fff" },
    { id: 80, color: "#fff" },
    { id: 81, color: "#fff" },
    { id: 82, color: "#fff" },
    { id: 83, color: "#fff" },
    { id: 84, color: "#fff" },
    { id: 85, color: "#fff" },
    { id: 86, color: "#fff" },
    { id: 87, color: "#fff" },
    { id: 88, color: "#fff" },
    { id: 89, color: "#fff" },
    { id: 90, color: "#fff" },
    { id: 91, color: "#fff" },
    { id: 92, color: "#fff" },
    { id: 93, color: "#fff" },
    { id: 94, color: "#fff" },
    { id: 95, color: "#fff" },
    { id: 96, color: "#fff" },
    { id: 97, color: "#fff" },
    { id: 98, color: "#fff" },
    { id: 99, color: "#fff" },
    { id: 100, color: "#fff" },
  ];

  const [data, setData] = useState(startData);
  const [userColor, setUserColor] = useState(null);

  useEffect(() => {
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
    const handleData = async () => {
      try {
        fetch("http://localhost:3000/api/table/")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data.data.result);
            setData(data.data.result);
          });
      } catch (e) {
        console.log(e);
      }
    };
    handleData();
    handleColor();
  }, []);

  //   const sendData = () => {
  //     fetch("http://localhost:3000/api/table/", {
  //       method: "PUT",
  //       body: JSON.stringify({
  //         id: item.id,
  //         color: userColor,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         console.log(data.data.result);
  //       });
  //   };

  const handleClick = (id, color) => {
    const objWithIdIndex = data.findIndex((item) => item.id === id);
    const newData = [...data];
    newData.splice(objWithIdIndex, 1, { id, color });
    setData(newData);

    // sendData(newData);

    // fetch("http://localhost:3000/api/table/", {
    //   method: "PUT",
    //   body: JSON.stringify({
    //     id: id,
    //     color: color,
    //   }),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data.data.result);
    //   });
  };

  return (
    <BoardStyled>
      <List>
        {data.map((item) => {
          return (
            <Item key={item.id}>
              <Button
                onClick={() => handleClick(item.id, userColor)}
                style={{ backgroundColor: item.color }}
              ></Button>
            </Item>
          );
        })}
      </List>
    </BoardStyled>
  );
};

export default Board;
