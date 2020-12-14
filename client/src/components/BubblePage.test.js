import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { fetchData as mockFetchData } from "../utils/fetchData"

jest.mock("../utils/fetchData")

const mockData = {
  data: [
    {
      color: "aliceblue",
      code: {hex: "#f0f8ff"},
      id: 1
    },
    {
      color: "limegreen",
      code: {hex: "#99ddbc"},
      id: 2
    },
    {
      color: "aqua",
      code: {hex: "#00ffff"},
      id: 3
    }
  ]
}

test("Fetches data and renders the bubbles", async () => {
  mockFetchData.mockResolvedValueOnce(mockData)
  render(<BubblePage />)
  await waitFor(()=>{
      const dropdown = screen.getByText(/aliceblue/i); 
      expect(dropdown).toBeInTheDocument()
  });   
});
