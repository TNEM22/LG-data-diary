const LocalGuardian = require('../models/localGuardianModel');

exports.getAllLocalGuardians = async (req, res) => {
  try {
    const localGuardians = await LocalGuardian.find();
    res.status(200).json({
      status: 'success',
      results: localGuardians.length,
      data: { localGuardians },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createLocalGuardian = async (req, res) => {
  try {
    const newLocalGuardian = await LocalGuardian.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        student: newLocalGuardian,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getLocalGuardian = async (req, res) => {
  try {
    const localGuardian = await LocalGuardian.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        localGuardian,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateLocalGuardian = async (req, res) => {
  try {
    const localGuardian = await LocalGuardian.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json({
      status: 'success',
      data: {
        localGuardian: localGuardian,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteLocalGuardian = async (req, res) => {
  try {
    await LocalGuardian.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
