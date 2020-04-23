import React from "react";
import { render, waitFor } from "@testing-library/react";

import App from "./App";
import { fetchShow as mockFetchShow } from "./api/fetchShow";

import mockData from "./data/mockData.json"

jest.mock("./api/fetchShow");

test("App fetches data and renders", async () => {
    mockFetchShow.mockResolvedValueOnce(mockData);
    const { getByText } = render(<App />);
    expect(getByText(/fetching data/i));
    await waitFor(() => {
        expect(getByText(/select a season/i));
    });

});
