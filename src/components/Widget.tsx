import React from "react";
import styles from "./Widget.module.css";
import arrowRight from "../images/arrowRight.png";
import plus from "../images/plus.png";

type MyProps = {};

type MyState = {
  data: {
    time: string;
    body: string;
  }[];
  months: string[];
  today: string;
};

export class Widget extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [
        {
          time: "18.01.2021",
          body: "Компания обеспечит бесплатными тестами на коронавирус всех приезжающих в Норильск поддержит стартапы Заполярья",
        },
        {
          time: "22.08.2021",
          body: "Компания обеспечит бесплатными тестами на коронавирус всех приезжающих в Норильск",
        },
      ],

      today: new Date().toLocaleString().slice(0, 10),
      months: [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h5>Объявление</h5>
            <img src={arrowRight} alt="arrow" />
          </div>
          <div className={styles.headerRight}>
            <img src={plus} alt="plus" />
            <div className={styles.button}>Добавить</div>
          </div>
        </div>
        <ul>
          {Object.keys(this.state.data)
            .reverse()
            .map((post: any, index: number) => {
              return (
                <li
                  key={index}
                  className={
                    this.state.data[post].time === this.state.today.toString()
                      ? styles.isUrgent
                      : styles.isNotUrgent
                  }
                >
                  {this.state.data[post].time ===
                  this.state.today.toString() ? (
                    <div className={styles.time}>
                      <div>Сегодня</div>
                      <div className={styles.urgent}>Срочное</div>
                    </div>
                  ) : (
                    <div className={styles.time}>
                      <div>
                        {this.state.data[post].time.slice(0, 2)}{" "}
                        {
                          this.state.months[
                            Number.parseInt(
                              this.state.data[post].time.slice(3, 5)
                            ) - 1
                          ]
                        }{" "}
                        {this.state.data[post].time.slice(
                          this.state.data[post].time.length - 4,
                          this.state.data[post].time.length
                        )}
                      </div>
                    </div>
                  )}
                  {this.state.data[post].body.length < 90 ? (
                    <div>{this.state.data[post].body}</div>
                  ) : (
                    <div>{this.state.data[post].body.slice(0, 90)}...</div>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default Widget;
