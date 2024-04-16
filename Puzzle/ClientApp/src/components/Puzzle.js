import React from "react";
import { puzzleImages } from "./PuzzleImages";

const Puzzle = () => {
    return (
        <main>
            <div className="puzzle-map">
                </div>
        <div className="images-container">
            {puzzleImages.map((image) => (
                <img key={image.id} src={image.src} alt={image.id} className="image" style={{ cursor: "pointer" }} draggable="true" />
            ))}
</div>
</main>
    );
    }

export default Puzzle;
