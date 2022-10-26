/** @jsxImportSource theme-ui */

function DotsIcon({ className = "" }) {
  return (
    <svg
      sx={{
        stroke: "text",
      }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="12" cy="12" r="9"></circle>
      <path d="M8 12L8 12.01"></path>
      <path d="M12 12L12 12.01"></path>
      <path d="M16 12L16 12.01"></path>
    </svg>
  )
}

export function SettingsIcon({ className = "" }) {
  return (
    <svg
      className={className}
      sx={{
        stroke: "text",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#2c3e50"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  )
}

export const CloseIcon = () => {
  return (
    <svg
      sx={{
        stroke: "text",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M18 6L6 18"></path>
      <path d="M6 6L18 18"></path>
    </svg>
  )
}

export const MenuIcon = () => {
  return (
    <svg
      sx={{
        stroke: "text",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M4 6L20 6"></path>
      <path d="M4 12L20 12"></path>
      <path d="M4 18L20 18"></path>
    </svg>
  )
}

function DiscordIcon({ className = "" }) {
  return (
    <svg
      sx={{
        stroke: "text",
        verticalAlign: "middle",
      }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="9" cy="12" r="1"></circle>
      <circle cx="15" cy="12" r="1"></circle>
      <path d="M7.5 7.5c3.5-1 5.5-1 9 0M7 16.5c3.5 1 6.5 1 10 0"></path>
      <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.476-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5"></path>
    </svg>
  )
}

function TwitterIcon({ className = "" }) {
  return (
    <svg
      sx={{
        stroke: "text",
        verticalAlign: "middle",
      }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 00.497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
    </svg>
  )
}

function PlusSign({ className = "" }) {
  return (
    <svg
      sx={{
        stroke: "text",
        verticalAlign: "middle",
      }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      fill="none"
      stroke="#2c3e50"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M12 5L12 19"></path>
      <path d="M5 12L19 12"></path>
    </svg>
  )
}

function SunLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        sx={{
          stroke: "text",
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 17a5 5 0 100-10 5 5 0 000 10zM12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      ></path>
    </svg>
  )
}

function MoonLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        sx={{
          stroke: "text",
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79v0z"
      ></path>
    </svg>
  )
}

function ProfileLogo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        sx={{
          stroke: "text",
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M23 18C23 19.074 22.1033 20.3156 20.0381 21.3482C18.0326 22.3509 15.1921 23 12 23C8.80787 23 5.96739 22.3509 3.96193 21.3482C1.89666 20.3156 1 19.074 1 18C1 16.926 1.89666 15.6844 3.96193 14.6518C5.96739 13.6491 8.80787 13 12 13C15.1921 13 18.0326 13.6491 20.0381 14.6518C22.1033 15.6844 23 16.926 23 18Z"
        stroke="black"
      />
      <circle
        sx={{
          stroke: "text",
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        cx="12"
        cy="6"
        r="5"
        stroke="black"
      />
    </svg>
  )
}

export {
  PlusSign,
  DotsIcon,
  DiscordIcon,
  TwitterIcon,
  SunLogo,
  MoonLogo,
  ProfileLogo,
}
