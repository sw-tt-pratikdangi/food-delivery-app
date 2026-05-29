const Food = require('../models/Food');


// GET ALL FOODS
const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();

    res.json(foods);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET SINGLE FOOD
const getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(
      req.params.id
    );

    if (!food) {
      return res.status(404).json({
        message: 'Food not found',
      });
    }

    res.json(food);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// ADD FOOD
const createFood = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      image,
    } = req.body;

    const food = await Food.create({
      title,
      description,
      price,
      image,
    });

    res.status(201).json(food);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE FOOD
const updateFood = async (
  req,
  res
) => {
  try {
    const food =
      await Food.findById(
        req.params.id
      );

    if (!food) {
      return res.status(404).json({
        message:
          'Food not found',
      });
    }

    food.title =
      req.body.title ||
      food.title;

    food.description =
      req.body.description ||
      food.description;

    food.price =
      req.body.price ||
      food.price;

    food.image =
      req.body.image ||
      food.image;

    const updatedFood =
      await food.save();

    res.json(updatedFood);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE FOOD
const deleteFood = async (
  req,
  res
) => {
  try {
    const food =
      await Food.findById(
        req.params.id
      );

    if (!food) {
      return res.status(404).json({
        message:
          'Food not found',
      });
    }

    await food.deleteOne();

    res.json({
      message:
        'Food deleted',
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood,
};