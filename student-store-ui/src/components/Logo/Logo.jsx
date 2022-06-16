import * as React from "react"
import "./Logo.css"

// Should render JSX that is wrapped by a div element with a className of logo
// Should use the Link component from react-router-dom to link to the home route (/) when clicked

export default function Logo() {
  return (
    <div className="logo">
      <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="CodePath Logo" />
    </div>
  )
}