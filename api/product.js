const express = require("express");
const router = express.Router();
let count = 1;

router.get('/count',(req,res)=>{
  count += 1;
  res.json({
    code:0,
    count
  })
})

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "Get data has successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});



module.exports = router;
