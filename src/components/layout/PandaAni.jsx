import React, { useRef, useEffect, useState } from "react"
import gsap from "gsap"

const PandaAni = () => {
  const [pandaAnimation, setPandaAnimation] = useState()
  const [tl] = useState(
    gsap.timeline({
      paused: true,
      defaults: {
        ease: "none",
        repeat: -1,
        yoyo: true,
        transformOrigin: "center center",
        duration: 0.7,
      },
    })
  )
  useEffect(() => {
    setPandaAnimation(
      tl.add("s"),
      tl
        .to(
          "#right-foot",
          {
            rotate: 20,
          },
          "s"
        )
        .to(
          "#head",
          {
            transform: "rotateZ(1deg) rotateY(0deg) rotateX(1deg)",
            force3D: true,
          },
          "s"
        )
        .to(
          ".noodle",
          {
            y: -0.5,
            x: -2,
          },
          "s"
        )
        .to(
          "#noodle1",
          {
            duration: 0.5,
            y: 2,
          },
          "s"
        )
        .to(
          "#noodle2",
          {
            duration: 0.6,
            y: 3,
          },
          "s"
        )
        .to(
          "#noodle3",
          {
            duration: 0.8,
            y: 3,
          },
          "s"
        )
        .to(
          "#munch",
          {
            duration: 0.5,
            y: 2,
            x: 1,
            rotate: 20,
          },
          "s"
        )
        .to(
          "#chopstick-1",
          {
            duration: 0.8,
            transformOrigin: "right bottom",
            y: 2,
            x: 3,
            rotate: 40,
          },
          "s"
        )
        .to(
          "#chopstick-2",
          {
            duration: 0.8,
            transformOrigin: "right bottom",
            y: 2,
            x: 7,
            rotate: 50,
          },
          "s"
        )
        .to(
          "#left-hand",
          {
            duration: 0.8,
            transformOrigin: "right bottom",
            y: -2,
            x: 1,
            rotate: 5,
          },
          "s"
        )
        .to(
          "#right-arm",
          {
            duration: 0.7,
            transformOrigin: "right bottom",
            y: 2,
            x: 1,
            rotate: -1,
          },
          "s"
        )
        .to(
          ".move",
          {
            duration: 0.7,
            transformOrigin: "center center",
            y: 2,
            x: 1,
          },
          "s"
        ),
      tl.timeScale(1.8)
    )
  }, [tl])

  return (
    <div
      className="blend"
      onClick={() => pandaAnimation.paused(!pandaAnimation.paused())}
    >
      <svg className="panda" viewBox="0 0 1004 727">
        <g id="munchie">
          <path fill="#ebf2de" d="M0 0h1003.66v726.084H0z" />
          <g id="panda">
            <path
              id="chopstick-2"
              d="M394.845 255.723l22.873 47.19"
              fill="none"
              stroke="#393439"
              strokeWidth={4}
            />
            <path
              id="chopstick-1"
              d="M414.264 259.129l3.454 43.784"
              fill="none"
              stroke="#393439"
              strokeWidth={4}
            />
            <ellipse
              cx="455.499"
              cy="417.078"
              rx="113.746"
              ry="20.827"
              fill="#c8cfbe"
            />
            <use
              id="left-hand"
              xlinkHref="#_Image1"
              x="398.881"
              y="295.518"
              width="67.812"
              height="86.508"
              transform="matrix(.99723 0 0 .99434 0 0)"
            />
            <ellipse
              cx="511.837"
              cy="370.176"
              rx="80.156"
              ry="64.421"
              fill="#fff"
              stroke="#393439"
              strokeWidth={3}
              strokeLinecap="round"
            />
            <g id="head">
              <g className="move ear" id="left-ear">
                <ellipse
                  cx="465.414"
                  cy="223.312"
                  rx="15.257"
                  ry="14.952"
                  fill="#585858"
                  stroke="#393439"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
                <path
                  d="M463.847 213.207c7.134-1.471 15.246 2.131 16.824 13.503 1.074 7.743-6.548 16.103-14.111 14.173-7.568-1.932-13.718-9.801-14.111-14.173-.699-7.788 3.759-11.928 11.398-13.503z"
                  fill="#444248"
                />
                <path
                  d="M466.45 217.469c6.812-1.358 14.558 1.967 16.064 12.463 1.026 7.145-6.252 14.861-13.473 13.08-7.227-1.783-13.099-9.046-13.474-13.08-.667-7.188 3.59-11.009 10.883-12.463z"
                  fill="#393439"
                />
              </g>
              <g className="move ear" id="right-ear">
                <ellipse
                  cx="563.66"
                  cy="223.312"
                  rx="15.257"
                  ry="14.952"
                  fill="#585858"
                  stroke="#393439"
                  strokeWidth={3}
                  strokeLinecap="round"
                />
                <path
                  d="M565.226 213.207c-7.134-1.471-15.246 2.131-16.823 13.503-1.074 7.743 6.548 16.103 14.111 14.173 7.568-1.932 13.718-9.801 14.11-14.173.699-7.788-3.759-11.928-11.398-13.503z"
                  fill="#444248"
                />
                <path
                  d="M562.623 217.469c-6.812-1.358-14.557 1.967-16.063 12.463-1.026 7.145 6.252 14.861 13.473 13.08 7.226-1.783 13.099-9.046 13.473-13.08.668-7.188-3.589-11.009-10.883-12.463z"
                  fill="#393439"
                />
              </g>
              <use
                id="head1"
                xlinkHref="#_Image2"
                x="434.61"
                y="215.744"
                width="160.495"
                height="136.198"
                transform="matrix(.99686 0 0 .99415 0 0)"
              />
              <ellipse
                className="move"
                id="cheek-left"
                cx="471.699"
                cy="288.196"
                rx="8.972"
                ry="5.602"
                fill="#ffc1a8"
              />
              <ellipse
                className="move"
                id="cheek-right"
                cx="551.034"
                cy="289.128"
                rx="8.972"
                ry="5.602"
                fill="#ffc1a8"
              />
              <path
                id="munch"
                d="M527.666 280.251c-.992.143-.539 5.2 1.277 6.814 1.478 1.312 3.503 2.423 5.007 1.953"
                fill="none"
                stroke="#262626"
                strokeWidth={3}
                strokeLinecap="round"
              />
              <g className="move" id="nose" fill="#333">
                <path d="M523.197 273.802c-.196-.718-.691-1.552-1.247-1.529-.998.041-2.695.05-4.461.247-1.172.13-2.61-.215-3.85-.241-1.703-.037-3.244.5-4.75.364-1.781-.16-3.142-.332-3.853-.37-.555-.03-1.051.811-1.246 1.529-.207.765-.207 2.295 0 3.059.195.719.691 1.483 1.246 1.53 3.027.255 13.888.255 16.914 0 .555-.047 1.051-.811 1.247-1.53.207-.764.207-2.294 0-3.059z" />
                <path d="M513.736 274.155s-3.85 1.957-3.85 4.052a3.852 3.852 0 0 0 3.85 3.85 3.852 3.852 0 0 0 3.85-3.85c0-2.095-3.85-4.052-3.85-4.052z" />
              </g>
              <path
                className="move"
                id="eye-right"
                d="M541.89 248.171c8.677 1.419 13.603 6.728 15.971 14.337 3.513 11.297-4.199 17.185-15.971 14.338-8.523-2.062-13.655-6.715-15.971-14.338-3.096-10.192 4.641-16.188 15.971-14.337z"
                fill="#424147"
                stroke="#333"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                className="move"
                id="eye-left"
                d="M480.048 248.171c-8.678 1.419-13.604 6.728-15.971 14.337-3.514 11.297 4.199 17.185 15.971 14.338 8.523-2.062 13.655-6.715 15.971-14.338 3.096-10.192-4.641-16.188-15.971-14.337z"
                fill="#43414a"
                stroke="#333"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                className="move"
                id="pupil-left"
                d="M480.239 259.265c3.368.604 5.664 3.537 5.125 6.546-.54 3.008-1.459-2.196-4.827-2.8-3.368-.604-7.917 3.62-7.377.611.539-3.008 3.712-4.961 7.079-4.357z"
                fill="#f6f6f7"
              />
              <path
                className="move"
                id="pupil-right"
                d="M541.507 258.762c-3.314.595-5.573 3.481-5.042 6.441.531 2.96 1.436-2.161 4.75-2.755 3.314-.594 7.79 3.562 7.259.601-.531-2.96-3.653-4.881-6.967-4.287z"
                fill="#f6f6f7"
              />
              <g className="move" id="mouth">
                <g
                  id="group"
                  fill="none"
                  stroke="#262626"
                  strokeWidth={3}
                  strokeLinecap="round"
                >
                  <path d="M513.81 285.353c-.668 1.613 3.706 6.241 7.362 6.026 2.682-.158 6.335-2.447 7.08-5.186" />
                  <path d="M499.314 285.353c-.667 1.613 4.389 6.274 8.104 6.015 2.68-.186 5.593-2.436 6.338-5.175" />
                </g>
                <ellipse
                  cx="513.975"
                  cy="290.58"
                  rx="2.139"
                  ry="2.211"
                  fill="#262626"
                />
              </g>
            </g>
            <path
              className="noodle"
              id="long-noodle2"
              fill="#ceb751"
              stroke="#262626"
              strokeWidth={4}
              strokeLinecap="round"
              d="M506.088 292.791h6.863v76.881h-6.863z"
            />
            <path
              className="noodle"
              id="long-noodle1"
              fill="#ceb751"
              stroke="#262626"
              strokeWidth={4}
              strokeLinecap="round"
              d="M514.555 292.791h6.863v76.881h-6.863z"
            />
            <ellipse
              id="noodle1"
              cx="466.985"
              cy="372.104"
              rx="19.47"
              ry="14.657"
              fill="#d7bd69"
              stroke="#444248"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <ellipse
              id="noodle2"
              cx="479.894"
              cy="377.44"
              rx="19.47"
              ry="14.657"
              fill="#bf9b51"
              stroke="#444248"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <ellipse
              id="noodle3"
              cx="515.444"
              cy="377.44"
              rx="22.302"
              ry="14.657"
              fill="#bf9b51"
              stroke="#444248"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <path
              d="M432.119 385.808l-18.657.431s-8.779-8.423-9.871-4.834c-1.694 5.572-3.309 29.426-.294 38.265 2.538 7.439 11.424 14.371 18.383 14.765 6.96.395 42.382-1.579 42.382-1.579-8.212-1.019-34.73-44.605-31.943-47.048z"
              fill="#43414a"
              stroke="#393439"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <path
              d="M433.038 369.652c-.968 11.346.19 18.295 1.463 26.041 2.814 17.116 11.502 29.088 27.251 36.352 9.551 4.405 24.501 5.255 38.865 5.16 14.485-.096 34.835-.001 46.737-4.585 20.861-8.035 29.089-22.869 28.985-38.582-.052-7.849-3.441-15.538-9.827-22.293l-133.474-2.093z"
              fill="#393439"
              stroke="#393439"
              strokeWidth={4}
              strokeLinecap="round"
            />
            <g id="bowl">
              <path
                d="M431.681 370.176c1.594 11.526 2.274 17.508 5.675 25.902 10.105 24.934 30.966 39.04 70.812 38.519 39.847-.522 52.461-12.38 63.006-37.629 2.887-6.913 5.21-17.83 5.519-26.999l-145.012.207z"
                fill="#9bb554"
                stroke="#393439"
                strokeWidth={4}
                strokeLinecap="round"
              />
              <path
                d="M475.502 372.123c-.843-.615.018 13.853 7.57 29.96 6.328 13.497 18.301 28.913 28.765 30.152 12.682 1.502 24.177-13.233 29.752-30.152 4.514-13.699 5.268-29.959 5.268-29.959s-71.197.115-71.355-.001z"
                fill="#bccd75"
              />
              <path
                d="M437.356 396.078l66.831.37M520.438 396.265l13.564-.003"
                fill="none"
                stroke="#393439"
                strokeWidth={4}
                strokeLinecap="round"
              />
            </g>
            <g
              id="right-arm"
              stroke="#393439"
              strokeWidth={4}
              strokeLinecap="round"
            >
              <path
                d="M559.649 328.295s7.794 10.545 9.264 14.903c1.265 3.75 1.209 11.361 1.209 11.361l4.963.474s-26.722-3.359-34.617 3.231c-2.304 1.923-6.431 4.081-7.209 7.403-1.684 7.19 2.657 16.944 11.457 20.886 5.845 2.618 9.971 2.37 14.242 2.645 5.488.354 11.124.479 19.967-2.892 16.125-6.147 12.92-23.522 12.599-24.683-.13-.474-.731-8.146-4.322-16.335-5.21-11.881-14.898-25.115-20.2-21.754-8.956 5.679-7.353 4.761-7.353 4.761"
                fill="#43414a"
              />
              <path
                d="M534.401 366.913l13.09-.675M534.401 373.38l13.09-.675M537.121 379.891l10.37-.718"
                fill="none"
              />
            </g>
            <g id="right-foot">
              <path
                d="M576.445 377.221c13.343 1.154 19.393 14.613 18.025 30.428-1.367 15.815-13.31 27.718-26.653 26.565-13.343-1.154-23.065-14.931-21.697-30.746 1.367-15.815 16.983-27.401 30.325-26.247z"
                fill="#393439"
                stroke="#393439"
                strokeWidth={4}
                strokeLinecap="round"
              />
              <path
                d="M575.406 382.612c11.02 1.729 18.343 13.485 16.342 26.237-2 12.751-12.571 21.7-23.59 19.971-11.02-1.728-18.343-13.484-16.342-26.236 2-12.751 12.571-21.7 23.59-19.972z"
                fill="#45414a"
              />
              <use
                xlinkHref="#_Image3"
                x="555.02"
                y="393.276"
                width="37.755"
                height="38.567"
                transform="matrix(.99356 0 0 .98889 0 0)"
              />
            </g>
          </g>
        </g>
        <defs>
          <image
            id="_Image1"
            width={68}
            height={87}
            xlinkHref="data:image/png;base64,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"
          />
          <image
            id="_Image2"
            width={161}
            height={137}
            xlinkHref="data:image/png;base64,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"
          />
          <image
            id="_Image3"
            width={38}
            height={39}
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAnCAYAAABjYToLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGLklEQVRYhcWYzY9eVR3HP9/TibjpRlcUS0BbK1Y2dCM7EjfFQuOMYmkLYyOW+A+YEBYobkr4Eyg1bdEODbRjX6bMjiUrNVGCjq0vASkrXKiL2uT5fV2ct3ufmabzlCae5D73ueee8zvf8/293iPuoB05/Lxk7UF+DHSfxDbgvvL6Y5vr4I+x3rX825O/es2zrqGZAB06ukekReTvSLofhA2aktL7jO0PsZZNvHHyzPHf3FVgPzh09EHBMZQOCNAQya0kDDiynR8dbxpePHXm+N8+E7DFgz/aIvSyxE9Q+lwS2MpsCISwN9aSJIzBlUETBhw3bV41/tnppdcnMwNbfPq5rVJaQtqXMgogg5I6IE3rsbThe9vkxww0MtoVOw6efvPEvzcNbPHAc9tJWpH0sKQyKI1A3QrQRgDH4AKXftt/ILzv9NkTH90W2LMHfrgV6b2ktBsJSaTCFsqb3iyoIbg6F7JK7azjcLyP/egbZ3/xn+GcNHw4/NSRZHQqod0oe5YwtsouZgM0bHWuLYSbnSb0DaNTh586MhKexrP1gvC8CznVA6uQWVQ4FqvGmqqtFvl5LS8gvTDeSGmHvnfkS0rpWkq6J0mIlEGlImhG25puQ1sD46hhJAibCN9wxM4zb5/8B4wY80+F76l4rbybGWPwJtt6+cKfB7/URwAHv7u4S9IHKaWklEhKdMMvE+8qYxDZK6sD4AgiYmJ799K502uVseeZtrf/T9sCHAVIB+afkWF/9r/KhpFBNSje9bZevos7ZCyQDLswO/KoTK2Bwcwy8bMDrDLsLt+to6xndn5//pldyfjbzh0FlGiP0CO2x6loJkDVNkverBArPudYlN/LGO9LMl9RnVADKhmMyySp0n3nrNW5Ut58l++swIKtEPnlZLytZC8c7iVKmaAByDthbZqtHGcLmMqc89pgItOybQ64t1JILWPK5ECkjIakmprGbj9LddFLn363e71WyyTg3jnbX6j5UAUcDiAV41RjTaUeK8g3VY8NQdWx7TfXZ03VbmD9xTnb/3QxsqpzgFBx6cpARtXAqe6wDGhJunle98AKqnmg63MFvq7v0znjT6oBOcCpslZUm30n/5OajbR6vwKfcoxh3R/unU110/foRmj8yRzmutWptSOrySmjV6W75TSQiAGoylmFWFvUTQzY6qyUZwI7en8WcX3O+C8RQUoplyCudhMIiMiVaxr4aqqmKkEUFZaQUmNyM48CkIG9uRBg58piUG7nyID/mghfcUmk2VsMdQeO8j8GSbeUKc2b6tjBVfrCTMkbyxzKq8k8HBBemQtYE1yTvaPsD0eClD0z7OytKlVeUgsn7tZWa5iupqq62htD8HVcZCtpII3h6q9X3lpLF1beMo6Lwx2HgwiKsAmBC0tlgagMBkR9F+UyhDvLETj6/CDLdJgI2pzunXERSqljeM1m4vGAArCCyYtNoqvZYSZt8X5N3MfbLnOiyYmopjNtBkwMxyHXP6xd/eDTXV/9+nbgkZJax85WDXoYGKJH6mkbo9iWY2DUPXiO4lfbZFbviQsrb59sjBV7eNn4v66U54qSKLudVCcIt77M6FgVbW4bX1gfyRhcHewN7J9XOFvqn7Wrf/zX13Y+FKBvtag0DFTuZWSz7hY5o9YktHgYnRkaay4MVrZb3AL80oUr567UJeYGSxPmFSn24LRQ1ZULpuyRE0yqJLvnhJ576YnJbnVdlh0lN04HWIA4Z+uVIZZ1pcH+xxe2gt6TyF/iBlLJhO24oH+g1Pt0NZGxt7jRI39hIGcUY/M++NGL75wffYlvWLPs37uw3dKK5IdVvlJz4aGuYvVKd8PzMWiLN0Y9AJQrmt/LfuLi6vnbn13U9uTj81tlLVnaJ7l/O6ukneF5BsNU1Eii2dvg3MK1xLIvWz506Z3lDU97tmzUCfDna3+6uXPHQ2clJ1nf7GN7kvbg0cM3zbYGAaYDvYl8zOjHl1eXb9xq/U19vT6xd+EBiWPgp1UONjyyNtZR1p2hsmZASzYvXl49//fbrTnTZ/WTe+f3GD0LzEvcP2TvVuJtPgTOC//y0ury3T2D3QCggEeAx8in1aNTa+B6ub8L/O7S6vLtdrCu/Q99QMZe4/ljuQAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    </div>
  )
}
export default PandaAni
