import React from "react"
import { render } from "@testing-library/react"
import MapChart from "../MapChart"

// mock fetch used by react-simple-maps to avoid network calls in tests
global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => ({ type: "Topology" }) })
)

describe("MapChart", () => {
  test("renders without crashing (SSR-safe)", () => {
    // Should render and include an SVG element
    const { container } = render(<MapChart />)
    const svg = container.querySelector("svg")
    expect(svg).toBeInTheDocument()
  })
})
