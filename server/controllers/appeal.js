import Appeal from "../models/appeal.js";


export const getAppeals = async (req, res) => {
  try {
    const appeals = await Appeal.find();
    res.status(200).json(appeals);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

/*
export const getSingleAppeal = async (req,res) => {
    try{
        const { id: _id } = req.params;
        const appeal = await Appeal.findById(_id);
        res.json(appeal);
    }
    catch(error) {
        res.status(404).json({
            message:error.message,
        });
    }
}
*/

export const createAppeal = async (req, res) => {
  const appeal = req.body;
  const newAppeal = new Appeal(appeal);
  try {
    await newAppeal.save();
    res.status(201).json(newAppeal);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};


export const updateAppeal = async (req, res) => {
    const { id: _id } = req.params;
    const appeal = req.body;
    try {
        const updatedAppeal = await Appeal.findByIdAndUpdate(_id, appeal, { new: true });
        res.json(updatedAppeal);
    } catch (error) {
        res.status(409).json({
        message: error.message,
        });
    }
};


export const deleteAppeal = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const deletedAppeal = await Appeal.findByIdAndRemove(_id);
    res.json(deletedAppeal);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};