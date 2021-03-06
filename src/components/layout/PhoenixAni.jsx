import React, { useEffect, useState } from "react"
import gsap from "gsap"

const PhoenixAni = () => {
  const [phoenixAnimation, setPhoenixAnimation] = useState()
  const [tl] = useState(gsap.timeline({ paused: true }))
  useEffect(() => {
    setPhoenixAnimation(
      tl
        .to(
          ".phoenix path",
          {
            duration: 1.5,
            stagger: {
              amount: 3.5,
              ease: "steps(12)",
              from: "random",
            },
            fill: gsap.utils.random(["black", "white", "gray"]),
            opacity: gsap.utils.distribute({
              base: 0.1,
              amount: 0.5,
              from: 1,
            }),
          },
          1
        )
        .to(
          ".phoenix path",
          {
            duration: 1.5,
            stagger: {
              amount: 1.5,
              ease: "circ",
              from: "random",
            },
            y: gsap.utils.random([-500, 100, 500, -400]),
            x: gsap.utils.random([-400, -300, 500, -700]),
            rotate: gsap.utils.random([-480, 360, -200]),
            opacity: 0,
            fill: "gray",
          },
          2.5
        )
    )
  }, [tl])

  return (
    <div className="blend">
      <svg
        onClick={() => phoenixAnimation.paused(!phoenixAnimation.paused())}
        className="phoenix"
        viewBox="0 0 530 477"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.414"
      >
        <g transform="translate(-510.008 -76.223)">
          <g id="phoenix">
            <path
              d="M748.638 476.065l25.468-95.378-8.865-37.765-16.603 133.143z"
              fill="#d20308"
            />
            <path
              d="M781.641 342.428l7.942 78.121-15.568-39.961 7.626-38.16z"
              fill="#f78c02"
            />
            <path
              d="M750.095 476.904l40.461-54.696-16.406-41.906-24.055 96.602z"
              fill="#f84405"
            />
            <path
              d="M794.579 454.564l-3.516-32.267-43.179 56.86 46.695-24.593z"
              fill="#f22202"
            />
            <path
              d="M773.329 498.115l-24.469-18.829 45.815-24.689-21.346 43.518z"
              fill="#a50201"
            />
            <path
              d="M798.527 480.085l-3.403-25.048-20.871 41.731 24.274-16.683z"
              fill="#f46b00"
            />
            <path
              d="M772.863 552.327l-23.961-72.146 23.505 16.362.456 55.784z"
              fill="#720101"
            />
            <path
              d="M798.387 480.403l-23.788 72.223-1.624-55.971 25.412-16.252z"
              fill="#f48e03"
            />
            <path
              d="M705.98 266.913l29.5 3.449 15.172-31.792-44.672 28.343z"
              fill="#cf0300"
            />
            <path
              d="M751.424 238.127l3.35 34.617-18.767-2.481 15.417-32.136z"
              fill="#830100"
            />
            <path
              d="M764.959 226.681l-10.193 46.117-3.283-35.201 13.476-10.916z"
              fill="#d10305"
            />
            <path
              d="M772.532 248.852l-16.614 22.478 9.072-44.587 7.542 22.109z"
              fill="#f84304"
              transform="matrix(1.06683 0 0 1.02856 -51.628 -6.476)"
            />
            <path
              d="M789.879 272.689l-35.281-.003 18.454-23.465 16.827 23.468z"
              fill="#d60308"
            />
            <path
              d="M780.888 227.287l-7.656 22.078 17.475 23.528-9.819-45.606z"
              fill="#f0ac02"
            />
            <path
              d="M765.48 226.232l14.782-.669-7.57 24.303-7.212-23.634z"
              fill="#f5e505"
              transform="matrix(1.10275 0 0 .99178 -78.933 2.505)"
            />
            <path
              d="M764.069 227.384l-3.803-65.671 21.637 64.618-17.834 1.053z"
              fill="#f5ad03"
            />
            <path
              d="M752.85 197.562l7.137-32.03 5.213 60.742-12.35-28.712z"
              fill="#f58e00"
            />
            <path
              d="M756.055 283.756l17.216-10.857-18.127-.142.911 10.999z"
              fill="#890100"
            />
            <path
              d="M773.231 306.061l-.242-32.556 16.742 10.305-16.5 22.251z"
              fill="#ed430f"
            />
            <path
              d="M756.444 284.116l16.642-10.658-.154 33.095-16.488-22.437z"
              fill="#cd0301"
            />
            <path
              d="M746.505 333.824l26.821-27.054-16.796-22.438-10.025 49.492z"
              fill="#ab0200"
            />
            <path
              d="M789.985 283.919l9.697 49.126-26.861-26.737 17.164-22.389z"
              fill="#f8a417"
            />
            <path
              d="M747.106 333.839l16.799 7.739 9.127-34.113-25.926 26.374z"
              fill="#ca0300"
            />
            <path
              d="M780.742 342.125l18.936-8.872-26.67-26.577 7.734 35.449z"
              fill="#f88b00"
            />
            <path
              d="M772.739 373.828l8.561-31.661-7.903-35.081-8.768 33.633 8.11 33.109z"
              fill="#f0b200"
            />
            <path
              d="M760.192 366.444l4.396-25.469-18.413-7.072 14.017 32.541z"
              fill="#f82204"
            />
            <path
              d="M760.192 366.444l4.396-25.469-18.413-7.072 14.017 32.541z"
              fill="#c70305"
              transform="matrix(-1 0 0 1 1546.71 .462)"
            />
            <path
              d="M743.526 350.923l-11.757 47.334 28.67-32.31-16.913-15.024z"
              fill="#f64505"
            />
            <path
              d="M743.526 350.923l-11.757 47.334 28.67-32.31-16.913-15.024z"
              fill="#f6c703"
              transform="matrix(-1 0 0 1 1546.71 .462)"
            />
            <path
              d="M737.407 420.396l23.304-54.199-28.933 32.149c1.01 10.417 2.698 18.433 5.629 22.05z"
              fill="#ce0301"
            />
            <path
              d="M737.407 420.396l23.304-54.199-28.933 32.149c1.01 10.417 2.698 18.433 5.629 22.05z"
              fill="#f39105"
              transform="matrix(-1 0 0 1 1546.71 .462)"
            />
            <path
              d="M745.354 447.72c-4.302-7.459-6.825-16.509-7.484-27.226l22.831-53.305-14.773 80.002"
              fill="#a90201"
            />
            <path
              d="M745.354 447.72c-4.302-7.459-6.825-16.509-7.484-27.226l22.831-53.305-14.773 80.002"
              fill="#a90201"
              transform="matrix(-1 0 0 1 1546.71 .462)"
            />
            <path
              d="M759.965 365.914l-16.772-15.135 3.566-16.543 13.206 31.678z"
              fill="#f86409"
            />
            <path
              d="M759.965 365.914l-16.772-15.135 3.566-16.543 13.206 31.678z"
              fill="#f5b304"
              transform="matrix(-1 0 0 1 1546.71 .462)"
            />
            <path
              d="M756.258 283.823l17.493-10.915-18.607-.151 1.114 11.066z"
              fill="#890100"
              transform="matrix(-1 0 0 1 1546.07 .052)"
            />
            <path
              d="M782.188 227.663l5.751-76.261-26.919 12 21.168 64.261z"
              fill="#f4c800"
            />
            <path
              d="M793.697 197.044l-11.018 29.627 5.017-74.275 6.001 44.648z"
              fill="#eed000"
            />
            <path
              d="M762.537 139.135l-2.639 24.46 29.766-12.796-27.127-11.664z"
              fill="#f5ae00"
            />
            <path
              d="M728.884 171.311l4.759-17.489 5.89 9.54-10.649 7.949z"
              fill="#d70302"
            />
            <path
              d="M761.532 140.263l-27.633 12.96 5.931 9.705 21.702-22.665z"
              fill="#f52302"
            />
            <path
              d="M759.4 163.63l-18.855-.431 20.884-22.625-2.029 23.056z"
              fill="#f16500"
            />
            <path
              d="M794.077 235.432l-2.887 37.246-9.651-46.632 12.538 9.386z"
              fill="#f12509"
              transform="translate(.024 .818)"
            />
            <path
              d="M810.347 271.764l-15.552-35.23-3.038 36.269 18.59-1.039z"
              fill="#cf0301"
            />
            <path
              d="M838.249 268.186l-43.234-31.67 15.623 35.246 27.611-3.576z"
              fill="#f24509"
            />
            <path
              d="M827.01 236.372l11.75 32.277-41.869-31.232 30.119-1.045z"
              fill="#ef3000"
            />
            <path
              d="M872.482 238.033l-34.211 29.562-11.507-31.52 45.718 1.958z"
              fill="#f88d02"
            />
            <path
              d="M705.233 266.893l14.526-29.357-46.086-.824 31.56 30.181z"
              fill="#f6b000"
            />
            <path
              d="M750.012 236.771l-29.5-1.144-14.753 29.884 44.253-28.74z"
              fill="#f84300"
              transform="translate(-.643 1.677)"
            />
            <path
              d="M762.174 137.878l42.639 40.193-43.271-10.44.632-29.753z"
              fill="#f8e214"
              transform="rotate(-68.418 763.295 138.43)"
            />
            <path
              d="M809.108 167.89l59.369 84.495-117.602-1.042 58.233-83.453z"
              fill="#c70300"
              transform="matrix(.55714 .22081 -.12033 .3036 247.408 -60.896)"
            />
            <path
              d="M809.108 167.89l95.795 51.652c-51.375 10.316-105.649 24.472-156.937 35.552l61.142-87.204z"
              fill="#c70300"
              transform="matrix(-.56643 .19576 -.10668 -.30867 1332.72 127.412)"
            />
            <path
              d="M809.108 167.89l95.795 51.652c-51.375 10.316-105.649 24.472-156.937 35.552l61.142-87.204z"
              fill="#c70300"
              transform="matrix(.56643 .19576 .10668 -.30867 219.306 128.959)"
            />
            <path
              d="M809.108 167.89l59.369 84.495-117.602-1.042 58.233-83.453z"
              fill="#f58e00"
              transform="matrix(-.55714 .22081 .12033 .3036 1303.25 -63.629)"
            />
            <path
              d="M825.087 170.081l40.871 80.478-101.209-28.857 60.338-51.621z"
              fill="#f62102"
              transform="matrix(.55714 .22081 -.12033 .3036 298.979 -29.99)"
            />
            <path
              d="M825.087 170.081l40.871 80.478-101.209-28.857 60.338-51.621z"
              fill="#f62102"
              transform="matrix(-.55714 .22081 .12033 .3036 1251.68 -32.723)"
            />
            <path
              d="M769.796 197.234l-16.577.393c.02 11.77-.72 21.848-.964 35.449l16.503-4.909c.379-10.203.879-22.33 1.038-30.933z"
              fill="#f86700"
              transform="rotate(-23.047 762.114 237.25)"
            />
            <path
              d="M771.755 199.804l-20.961-3.012c.02 11.77 1.326 25.35 1.081 38.951l17.412-6.485c.379-10.202 2.309-20.85 2.468-29.454z"
              fill="#f86700"
              transform="scale(-1 1) rotate(-23.047 -17.52 4036.128)"
            />
            <path
              d="M813.761 145.124l46.594 104.226-104.455-1.803 57.861-102.423z"
              fill="#c70300"
              transform="matrix(.55714 .22081 -.12033 .3036 184.573 -84.527)"
            />
            <path
              d="M820.179 156.353l18.089 98.144-89.919-12.087 71.83-86.057z"
              fill="#c70300"
              transform="matrix(-.56643 .19576 -.10668 -.30867 1381.62 112.029)"
            />
            <path
              d="M813.761 145.124l46.594 104.226-104.455-1.803 57.861-102.423z"
              fill="#c70300"
              transform="matrix(.56643 .19576 .10668 -.30867 156.253 105.916)"
            />
            <path
              d="M813.761 145.124l46.594 104.226-104.455-1.803 57.861-102.423z"
              fill="#c70300"
              transform="matrix(-.55714 .22081 .12033 .3036 1366.08 -87.26)"
            />
            <path
              d="M808.057 167.155l60.386 86.138-117.808-11.405 57.422-74.733z"
              fill="#f56803"
              transform="matrix(-.52062 -.27553 .12825 -.24233 1097.47 469.437)"
            />
            <path
              d="M808.057 167.155l60.386 86.138-117.808-11.405 57.422-74.733z"
              fill="#ce0301"
              transform="matrix(.52062 -.27553 -.12825 -.24233 453.183 466.704)"
            />
            <path
              d="M684.368 302.822l55.156 22.687-103.078-7.281 47.922-15.406z"
              fill="#cd0300"
              transform="rotate(46.421 853.07 50.8)"
            />
            <path
              d="M684.368 302.822l55.156 22.687-103.078-7.281 47.922-15.406z"
              fill="#cd0300"
              transform="scale(-1 1) rotate(46.421 80.683 -1756.85)"
            />
            <path
              d="M618.626 250.92l12.082 33.555-24.027 4.439 11.945-37.994z"
              fill="#f6e505"
              transform="matrix(-2.26743 -1.33156 .43923 -.74793 1926.706 1192.665)"
            />
            <path
              d="M599.525 199.663c5.504 19.012 12.82 35.475 18.861 54.998l-20.874 2.65 2.013-57.648z"
              fill="#f7b005"
              transform="matrix(-1.46668 -.831 .26975 -.4761 1459.228 774.718)"
            />
            <path
              d="M618.583 250.257l5.108 36.825-17.01 1.832 11.902-38.657z"
              fill="#f6e505"
              transform="matrix(2.58745 -.4684 .1545 .8535 -757.897 271.561)"
            />
            <path
              d="M613.698 202.036c2.946 25.369 7.179 59.505 7.742 58.897l-12.817.204 5.075-59.101z"
              fill="#f7b005"
              transform="matrix(1.65392 -.32597 .10582 .53689 -154.576 286.93)"
            />
            <path
              d="M618.626 250.92l12.082 33.555-24.027 4.439 11.945-37.994z"
              fill="#f64404"
              transform="matrix(-2.58745 -.4684 -.1545 .8535 2309.92 273.108)"
            />
            <path
              d="M599.525 199.663c5.504 19.012 12.82 35.475 18.861 54.998l-20.874 2.65 2.013-57.648z"
              fill="#f82000"
              transform="matrix(-1.65392 -.32597 -.10582 .53689 1682.97 285.29)"
            />
            <path
              d="M618.626 250.92l12.082 33.555-24.027 4.439 11.945-37.994z"
              fill="#f64404"
              transform="matrix(2.26743 -1.33156 -.43923 -.74793 -376.052 1189.932)"
            />
            <path
              d="M599.525 199.663c5.504 19.012 12.82 35.475 18.861 54.998l-20.874 2.65 2.013-57.648z"
              fill="#f64404"
              transform="matrix(1.46668 -.831 -.26975 -.4761 91.426 771.985)"
            />
            <g>
              <path
                d="M695.476 211.077l21.732 48.423-50.239 2.464 28.507-50.887z"
                fill="#f64501"
                transform="matrix(-.87232 -.51617 .38222 -.64595 1102.22 652.749)"
              />
            </g>
            <g>
              <path
                d="M695.476 211.077l21.732 48.423-50.239 2.464 28.507-50.887z"
                fill="#f64501"
                transform="matrix(.87232 -.51617 -.38222 -.64595 447.224 650.745)"
              />
            </g>
            <g>
              <path
                d="M682.452 203.569l44.906 48.021-25.058.894-19.848-48.915z"
                fill="#f68e06"
                transform="matrix(-.87232 -.51617 .38222 -.64595 1092.68 640.982)"
              />
            </g>
            <g>
              <path
                d="M682.452 203.569l44.906 48.021-25.058.894-19.848-48.915z"
                fill="#f6c703"
                transform="matrix(.87232 -.51617 -.38222 -.64595 456.759 638.978)"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}
export default PhoenixAni
