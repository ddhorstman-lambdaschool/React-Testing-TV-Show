import React from "react";
import { render } from "@testing-library/react";

import Episodes from "./Episodes";

import mockData from "../data/mockData.json";
import { formatSeasons } from "../utils/formatSeasons";

test("Renders correctly from a list of episodes", () => {
    const seasonOne = formatSeasons(mockData.data._embedded.episodes)["Season 1"];
    const { queryAllByText } = render(<Episodes episodes={seasonOne} />);
    expect(queryAllByText(/season/i)).toHaveLength(8);
});