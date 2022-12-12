const Branch = require("../models/LocationModels/Branch");
const Warehouse = require("../models/LocationModels/Warehouse");

exports.createBranch = (req, res) => {
  const { name, email, phone, status, address } = req.body;

  const newBranch = new Branch({
    name: name,
    email: email,
    phone: phone,
    status: status,
    address: address,
  });
  newBranch.save();

  return res.status(201).json({
    success: "true",
    branch: newBranch,
  });
};

exports.branchList = async (req, res) => {
  const branchList = await Branch.find({});
  if (!branchList) {
    return res.status(404).json({
      success: true,
      message: "branches not found",
    });
  }

  return res.status(201).json({
    success: true,
    branchList: branchList,
  });
};

// exports.deleteBranch = (req, res) => {};

exports.createWarehouse = (req, res) => {
  const { name, email, phone, status, address } = req.body;

  const newBranch = new Warehouse({
    name: name,
    email: email,
    phone: phone,
    status: status,
    address: address,
  });
  newBranch.save();

  return res.status(201).json({
    success: "true",
    branch: newBranch,
  });
};

exports.WarehouseList = async (req, res) => {
  const warehouseList = await Warehouse.find({});
  if (!warehouseList) {
    return res.status(404).json({
      success: false,
      message: "list not found",
    });
  }

  return res.status(201).json({
    success: true,
    warehouseList: warehouseList,
  });
};
