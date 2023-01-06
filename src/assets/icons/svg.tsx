import React from 'react';
import Svg, {G, Rect, Defs, Path, Mask} from 'react-native-svg';

export type IconProps = {
  name?: string;
  width: string;
  height: string;
  fill?: string;
};

export const MessageIcon = (props: IconProps) => (
  <Svg viewBox="0 0 28 28" {...props}>
    <Path fill="red" fillOpacity={0.01} d="M0 0h28v28H0z" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.378 23.558c-1.341.549-2.822.856-4.378.856-6.187 0-11.2-4.836-11.2-10.807C2.8 7.64 7.813 2.8 14 2.8c6.187 0 11.2 4.84 11.19 10.818 0 2.148-.652 4.151-1.778 5.837-.048.059-.091.129-.134.199-.13.231-.21.5-.21.786l1.19 4.76-4.523-1.664a1.735 1.735 0 0 0-1.255-.022c0 .006-.005.006-.01.006a.655.655 0 0 0-.092.038ZM20.892 14c0-.953-.77-1.723-1.723-1.723-.953 0-1.723.77-1.723 1.723 0 .953.77 1.723 1.723 1.723.953 0 1.723-.77 1.723-1.723ZM14 12.277c.953 0 1.723.77 1.723 1.723 0 .953-.77 1.723-1.723 1.723-.953 0-1.723-.77-1.723-1.723 0-.953.77-1.723 1.723-1.723ZM10.554 14c0-.953-.77-1.723-1.723-1.723-.953 0-1.723.77-1.723 1.723 0 .953.77 1.723 1.723 1.723.953 0 1.723-.77 1.723-1.723Z"
      fill="#000"
    />
    <Mask
      id="a"
      style={{
        maskType: 'luminance',
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={24}
      height={24}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.378 23.558c-1.341.549-2.822.856-4.378.856-6.187 0-11.2-4.836-11.2-10.807C2.8 7.64 7.813 2.8 14 2.8c6.187 0 11.2 4.84 11.19 10.818 0 2.148-.652 4.151-1.778 5.837-.048.059-.091.129-.134.199-.13.231-.21.5-.21.786l1.19 4.76-4.523-1.664a1.735 1.735 0 0 0-1.255-.022c0 .006-.005.006-.01.006a.655.655 0 0 0-.092.038ZM20.892 14c0-.953-.77-1.723-1.723-1.723-.953 0-1.723.77-1.723 1.723 0 .953.77 1.723 1.723 1.723.953 0 1.723-.77 1.723-1.723ZM14 12.277c.953 0 1.723.77 1.723 1.723 0 .953-.77 1.723-1.723 1.723-.953 0-1.723-.77-1.723-1.723 0-.953.77-1.723 1.723-1.723ZM10.554 14c0-.953-.77-1.723-1.723-1.723-.953 0-1.723.77-1.723 1.723 0 .953.77 1.723 1.723 1.723.953 0 1.723-.77 1.723-1.723Z"
        fill="#fff"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#fff" d="M0 0h28v28H0z" />
    </G>
  </Svg>
);

export const PhoneIcon = (props: IconProps) => (
  <Svg viewBox="0 0 22 22" {...props}>
    <Path d="M8.92128 5.07445C8.63606 1.7936 5.21334 0.183785 5.06848 0.118079C4.93259 0.0538654 4.78027 0.034452 4.63392 0.0598387C0.682564 0.715412 0.0882178 3.01515 0.0643245 3.11072C0.0314712 3.24512 0.0374445 3.384 0.0792578 3.51392C4.79222 18.1366 14.587 20.847 17.8066 21.7386C18.0545 21.8072 18.2591 21.8625 18.4144 21.9133C18.4891 21.9387 18.5667 21.9491 18.6444 21.9491C18.7504 21.9491 18.8564 21.9267 18.9535 21.8819C19.0521 21.8371 21.3787 20.741 21.9476 17.166C21.973 17.0107 21.9476 16.8494 21.8759 16.709C21.8252 16.6105 20.6081 14.2943 17.2332 13.4759C16.9972 13.4147 16.7553 13.4774 16.5731 13.6327C15.5084 14.5422 14.0374 15.5114 13.4028 15.6114C9.14827 13.5312 6.77238 9.53952 6.68278 8.7824C6.63051 8.3568 7.60566 6.86197 8.72715 5.6464C8.86902 5.49258 8.9407 5.28352 8.92128 5.07445Z" />
  </Svg>
);

export const StarIcon = (props: IconProps) => (
  <Svg viewBox="0 0 16 16" {...props}>
    <Path d="M15.9513 6.03517C15.8332 5.65653 15.5198 5.3804 15.1434 5.32287L10.8282 4.6681L8.89788 0.583644C8.72868 0.225927 8.38126 0 7.9998 0C7.61835 0 7.27093 0.225927 7.10173 0.583644L5.17241 4.6681L0.857244 5.32287C0.479792 5.3804 0.166416 5.65653 0.0492761 6.03517C-0.0688654 6.41381 0.0292521 6.82905 0.30258 7.10728L3.42532 10.287L2.68844 14.7773C2.62436 15.1695 2.77855 15.5659 3.08692 15.8002C3.26012 15.9331 3.46637 16 3.67462 16C3.83381 16 3.994 15.9603 4.14018 15.8797L7.9998 13.7596L11.8594 15.8797C12.0056 15.9603 12.1658 16 12.325 16C12.5322 16 12.7395 15.9331 12.9137 15.8002C13.2221 15.5659 13.3762 15.1695 13.3122 14.7773L12.5753 10.287L15.698 7.10728C15.9704 6.8301 16.0685 6.41381 15.9513 6.03517Z" />
  </Svg>
);

export const PinIcon = (props: IconProps) => (
  <Svg viewBox="0 0 19 25" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.26 24.083c.939 0 5.413-5.618 6.516-7.408 1.696-2.751 2.742-4.379 2.742-7.416A9.26 9.26 0 1 0 0 9.26c0 3.053.97 4.67 2.66 7.416 1.178 1.914 5.66 7.408 6.6 7.408Zm0-10.194a4.63 4.63 0 1 0 0-9.26 4.63 4.63 0 0 0 0 9.26Z"
      fill="#F52D56"
    />
  </Svg>
);

export const BaseIcon = (props: IconProps) => (
  <Svg viewBox="0 0 11 11" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.25 10.5a5.25 5.25 0 1 0 0-10.5 5.25 5.25 0 0 0 0 10.5Z"
      fill="#4CE5B1"
    />
  </Svg>
);

export const VehicleIcon = (props: IconProps) => (
  <Svg viewBox="0 0 50 21" {...props}>
    <G>
      <Path d="M49.1083 10.5658C49.0383 9.72178 48.9598 8.76667 48.8065 7.9425C48.7 7.36607 48.4659 6.59851 47.6745 6.59851C47.5952 6.59851 47.5158 6.60631 47.4374 6.61442C47.3884 6.61908 47.3395 6.62568 47.2593 6.62718C47.2577 6.62718 47.232 6.60226 47.1994 6.50751C46.967 5.8419 45.992 5.01397 44.7419 4.00136C44.4339 3.75286 44.0653 3.45361 43.9083 3.29926C43.9659 2.90046 43.9574 2.41067 43.6797 2.07313C43.5508 1.91562 43.3081 1.72748 42.8898 1.72748C42.8284 1.72748 42.7631 1.73124 42.6177 1.74415C42.3159 1.74415 41.7111 1.62013 40.8737 1.447C38.7146 1.00391 34.6956 0.178235 28.6694 0.0483553C19.8949 -0.125368 12.9998 6.20661 12.7156 6.47328L12.5123 6.66217C12.152 6.83634 11.014 7.25271 7.53559 7.93649C2.60195 8.90796 1.66081 10.4797 1.48303 11.0875C1.08919 11.3815 0.451351 12.0827 0.3503 12.9077C0.269069 13.5655 0.0851351 13.8345 0.0851351 13.8338L0 13.9436V18.5868L0.00960961 18.6715C0.277027 19.9045 1.55496 20.5569 3.70511 20.5569C4.39084 20.5569 4.90526 20.4869 4.88529 20.4869C4.91517 20.4853 5.18033 20.4808 5.63979 20.4713C5.59279 20.3414 5.55 20.2101 5.51306 20.0755C5.47733 19.9458 5.44459 19.8152 5.41937 19.6814C5.35871 19.3664 5.32462 19.0422 5.32462 18.7095C5.32462 15.856 7.6461 13.5344 10.4995 13.5344C13.353 13.5344 15.6746 15.856 15.6746 18.7095C15.6746 18.9676 15.6494 19.2179 15.6132 19.4659C15.5934 19.6005 15.5704 19.7341 15.5401 19.8647C15.509 20 15.4764 20.1338 15.4351 20.2652C21.8973 20.1267 30.1201 19.944 36.4886 19.7839C36.4605 19.6533 36.4426 19.521 36.4248 19.3872C36.4069 19.2551 36.3967 19.123 36.3898 18.9893C36.3851 18.896 36.3758 18.8044 36.3758 18.7095C36.3758 15.856 38.6974 13.5344 41.5508 13.5344C44.3638 13.5344 46.6559 15.7922 46.7197 18.5913C46.7197 18.6302 46.7258 18.6697 46.7258 18.7095C46.7258 18.8098 46.7165 18.9077 46.7102 19.0072C46.7024 19.1487 46.6884 19.2893 46.6698 19.4278C47.8857 19.2272 48.8001 18.5865 49.3296 17.5502C50.2353 15.7782 49.7736 13.379 49.4485 12.8695C49.273 12.5939 49.1859 11.5162 49.1083 10.5658Z" />
      <Path d="M6.48318 20.4527C7.15765 22.003 8.70059 23.0876 10.4989 23.0876C12.3619 23.0876 13.9486 21.9221 14.5815 20.2832C14.6317 20.1526 14.6764 20.0188 14.7146 19.882C14.751 19.7514 14.7814 19.6176 14.8063 19.4823C14.8506 19.2312 14.8785 18.973 14.8785 18.7089C14.8785 16.2901 12.9185 14.3299 10.4997 14.3299C8.08092 14.3299 6.12086 16.2901 6.12086 18.7089C6.12086 19.037 6.15975 19.3563 6.22852 19.6643C6.25765 19.7981 6.29264 19.9294 6.33498 20.0577C6.37822 20.1931 6.42762 20.3236 6.48318 20.4527Z" />
      <Path d="M37.3027 19.7623C37.7754 21.6703 39.4953 23.0876 41.5494 23.0876C43.6968 23.0876 45.4797 21.5397 45.8529 19.5002C45.8769 19.368 45.8955 19.235 45.9087 19.099C45.9204 18.97 45.9282 18.8409 45.9282 18.7087C45.9282 18.7056 45.9282 18.7024 45.9282 18.6985C45.9236 16.2853 43.9643 14.3297 41.5494 14.3297C39.1314 14.3297 37.1706 16.29 37.1706 18.7087C37.1706 18.7966 37.1791 18.882 37.1838 18.9691C37.1916 19.1036 37.2048 19.2356 37.2249 19.3664C37.2452 19.5003 37.2716 19.6324 37.3027 19.7623Z" />
    </G>
  </Svg>
);

export const LineIcon = (props: IconProps) => (
  <Svg {...props}>
    <Path
      d="M1.5 1.5v30.587"
      stroke="#C8C7CC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="4 4"
    />
  </Svg>
);

export const CarIcon = (props: IconProps) => (
  <Svg {...props}>
    <G filter="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m7.48 30.097 1.544 1.081.003-.004.135.095c.802.641 3.33 1.68 3.33 1.68 1.095.267 2.256-.558 3.068-1.34.412-.04.834-.284 1.123-.693l1.706-2.425c.23-.325.331-.696.312-1.035l.25-.355.758-1.077 1.293.3.259-.367-1.11-.56 4.534-6.44a1.66 1.66 0 0 0 .872-.643l4.17-5.924c.257-.363.353-.782.301-1.152.4-.791.89-2.084.213-2.668l-4.407-3.085-4.407-3.084c-.781-.437-1.834.464-2.445 1.106a1.64 1.64 0 0 0-.985.673l-4.171 5.923a1.65 1.65 0 0 0-.311 1.036L8.95 17.622l-.83-.78-.26.366.664 1.018-.744 1.057-.26.357c-.324.1-.634.318-.862.641L4.95 22.705c-.232.33-.334.707-.311 1.05-.491 1.04-.953 2.507-.295 3.492 0 0 1.839 2.018 2.716 2.552l.42.294-.002.004Z"
        fill="#fff"
      />
    </G>
    <Rect
      x={27.491}
      y={7.504}
      width={2}
      height={5}
      rx={1}
      transform="rotate(124 27.49 7.504)"
      fill="#242E42"
    />
    <Rect
      x={29.978}
      y={9.181}
      width={2}
      height={4}
      rx={1}
      transform="rotate(124 29.978 9.181)"
      fill="#F52D56"
    />
    <Rect
      x={10.445}
      y={30.986}
      width={1}
      height={5}
      rx={0.5}
      transform="rotate(124 10.445 30.986)"
      fill="#242E42"
    />
    <Rect
      x={24.174}
      y={5.267}
      width={2}
      height={4}
      rx={1}
      transform="rotate(124 24.174 5.267)"
      fill="#F52D56"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12.065 24.014.005-.007c-1.55-1.231-2.418-2.219-2.878-2.996-.506-.856-.517-1.456-.401-1.841l.005-.017c.023-.072.05-.137.08-.194.12-.239.273-.348.273-.348l4.062-2.646c-.02.76 2.133 2.625 2.958 3.312.89.604 3.276 2.158 4.003 1.93l-1.442 4.62s-.064.177-.261.358c-.046.043-.1.085-.162.126l-.018.013c-.34.215-.923.368-1.888.118-.875-.23-2.065-.791-3.676-1.942l-.005.007-.327-.247-.328-.246ZM23.994 15.635l-4.491-3.383-2.715-2.045-.17-.128c-.398-1.38.817-3.078 1.738-4.116l9.194 6.925c-.75 1.167-2.055 2.796-3.495 2.793l-.06-.046ZM26.227 16.53l-5.486 8.133s.708-4.626 1.35-5.578c.642-.951 4.78-3.51 4.136-2.555ZM14.618 8.705l-5.486 8.133s4.104-2.508 4.746-3.46c.642-.951 1.384-5.628.74-4.673Z"
      fill="#242E42"
    />
    <Defs />
  </Svg>
);
