interface Color {
  color?: string;
}

export default function Shopee({ color }: Color) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      className={`w-5 h-5 hover:underline hover:text-minion-yellow cursor-pointer ${
        color ? color : 'text-white'
      }`}
      viewBox="0,0,256,256">
      <g
        fill="currentColor"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none">
        <g transform="scale(10.66667,10.66667)">
          <path d="M22.57,4.543c-0.29,-0.31 -0.7,-0.49 -1.13,-0.49h-4.54c-0.46,-2.28 -2.48,-4.01 -4.9,-4.01c-2.42,0 -4.44,1.73 -4.9,4.01h-4.54c-0.43,0 -0.84,0.18 -1.13,0.49c-0.29,0.31 -0.45,0.73 -0.43,1.149l0.71,15.25c0.08,1.74 1.5,3.1 3.23,3.1h14.12c1.73,0 3.15,-1.36 3.23,-3.1l0.71,-15.25c0.02,-0.419 -0.14,-0.839 -0.43,-1.149zM12,2.043c1.31,0 2.41,0.84 2.82,2.01h-5.64c0.41,-1.171 1.51,-2.01 2.82,-2.01zM11.97,20.003c-1.49,0 -2.71,-0.63 -3.46,-1.14c-0.47,-0.32 -0.59,-0.95 -0.29,-1.42l0.02,-0.04c0.31,-0.5 0.96,-0.64 1.45,-0.33c0.68,0.41 1.62,0.9 2.28,0.9c1.12,0 2.06,-0.62 2.06,-1.35c0,-0.92 -0.6,-1.29 -2.41,-1.95c-1.55,-0.57 -3.46,-1.27 -3.46,-3.43c0,-1.88 1.67,-3.3 3.88,-3.3c1.32,0 2.3,0.39 2.94,0.76c0.51,0.29 0.67,0.95 0.36,1.45c-0.2,0.33 -0.55,0.51 -0.9,0.51c-0.17,0 -0.34,-0.04 -0.49,-0.12c-0.55,-0.29 -1.27,-0.58 -1.91,-0.58c-1.08,0 -1.86,0.54 -1.86,1.28c0,0.64 0.56,0.96 2.13,1.53c1.58,0.57 3.75,1.36 3.75,3.85c0,1.9 -1.8,3.38 -4.09,3.38z"></path>
        </g>
      </g>
    </svg>
  );
}
