const mongoose = require("mongoose");

const navbarSchema = new mongoose.Schema({
  logo: { type: String, required: true },
  navlinks: [
    { 
      name: { type: String, required: true },
      link: { type: String },
      hasDropdown: { type: Boolean, default: false },
      dropdownItems: [
        {
          name: { type: String,  },
          link: { type: String },
          hasSubDropdown: { type: Boolean, default: false },
          subItems: [
            {
              
              name: { type: String,  },
              link: { type: String,  },
            },
          ],
        },
      ],
    },
  ],
});

module.exports = mongoose.model("Navbar", navbarSchema);
