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


// getting detail of a branch
exports.branch = async (req, res) => {

  const branch = await Branch.findById(req.param.id);

  if (!branch) {
    return res.status(201).json({
      success: true,
      message: "branch not found"
    });
  }

  return res.status(201).json({
    success: true,
    branch: branch,
  })

}

// deleting a branch 
exports.deleteBranch = async (req, res) => {
  try {

    await Branch.findByIdAndDelete(req.param.Id);

    return res.status(201).json({
      success: true,
      message: "branch deleted"
    });


  } catch (error) {
    return res.status(201).json({
      success: false,
      error,
    });
  }


};



// <--   WAREHOUSE APIs  -->

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


exports.Warehouse = async (req, res) => {

  try {

    const warehouse = await Warehouse.findById(req.params.Id);

    if (!warehouse) {
      return res.status(201).json({
        success: true,
        message: "warehouse"
      })
    }

    return res.status(201).json({
      success: true,
      warehouse: warehouse
    });

  } catch (error) {
    return res.status(501).json({
      success: false,
      error
    })
  }
}


exports.deleteWarehouse = async (req, res) => {
  try {
    await Warehouse.findByIdAndDelete(req.params.Id);

    return res.status(201).json({
      success: true,
      message: "warehouse deleted"
    })



  } catch (error) {

    return res.status(500).json({
      success: false,
      error
    })
  }
}