/** @type {import("tailwindcss").Config}*/

module.exports = {
    content: ["./src/**/.{js, jsx, ts, tsx}"],
    theme: {
        extend: {
            colors: {
                "veryDarkBlue": "hsl(216, 12%, 8%)",
                "darkBlue": "hsl(213, 19%, 18%)",
                "mediumGrey": "hsl(216, 12%, 54%)",
                "lightGrey": "hsl(217, 12%, 63%)",
                "orange": "hsl(25, 97%, 53%)",
            }
        }
    }
};