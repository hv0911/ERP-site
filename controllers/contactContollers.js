const Contact = require("../models/ContactModels/Contact");

exports.createContactPost = async (req, res) => {
  let uniqueId;
  let number;
  const suppliers = await Contact.find({ contact_type: "supplier" });
  const customers = await Contact.find({ contact_type: "customer" });

  if (!suppliers || !customers) {
    if (req.body.contact_type === "supplier") {
      uniqueId = "SUP-" + 200000;
    } else {
      uniqueId = "CUS-" + 100000;
    }
  } else {
    if (req.body.contact_type === "supplier") {
      number =
        parseInt(suppliers[suppliers.length - 1].contactID.substring(5)) + 1;
      console.log(number);
      uniqueId = "SUP-" + number;
    } else {
      number =
        parseInt(suppliers[customers.length - 1].contactID.substring(5)) + 1;
      console.log(number);
      uniqueId = "CUS-" + number;
    }
  }

  // if (!contacts) {
  //   if (req.body.contact_type === "supplier") {
  //     uniqueId = "SUP-" + 200000;
  //   } else {
  //     uniqueId = "CUS-" + 100000;
  //   }
  // } else {
  //   if (req.body.contact_type === "supplier") {
  //     uniqueId = "SUP-" + number;
  //   } else {
  //     uniqueId = "CUS-" + number;
  //   }
  // }

  const newContact = new Contact({
    contact_type: req.body.contact_type,

    name: req.body.name,

    contactID: uniqueId,

    profile_picture: req.body.profile_picture,

    business_name: req.body.business_name,

    tax_number: req.body.tax_number,

    opening_balance: req.body.opening_balance,

    pay_term: req.body.pay_term,

    pay_term_condition: req.body.pay_term_condition,

    email: req.body.email,

    mobile_no: req.body.mobile_no,

    alt_mobile_no: req.body.alt_mobile_no,

    password: req.body.password,

    country: req.body.country,

    state: req.body.state,

    city: req.body.city,

    address: req.body.address,

    note: req.body.note,
  });

  newContact.save();

  return res.status(201).json({
    success: true,
    contact: newContact,
  });
};

// exports.createContactGet = (req, res) => {
//   res.send("GET conatact request");
// };

//    <-- SUPPLIERS -->

exports.getSuppliers = async (req, res) => {
  try {
    let suppliers = await Contact.find({ contact_type: "supplier" });

    if (!suppliers) {
      return res.status(404).json({
        success: false,
        message: "suppliers not found",
      });
    }

    return res.status(201).json({
      success: true,
      suppliers: suppliers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error occur",
    });
  }
};

exports.supplier = (req, res) => {
  res.send(`GET request for a specific supplier - id${req.params.supplierID}`);
};

exports.supplierUpdate = (req, res) => {
  res.send(`PUT request for a specific supplier - id${req.params.supplierID}`);
};

exports.supplierDelete = (req, res) => {
  res.send(
    `Delete request for a specific supplier - id${req.params.supplierID}`
  );
};

//  <-- CUSTOMERs -->

exports.getCustomers = async (req, res) => {
  try {
    let customers = await Contact.find({ contact_type: "customer" });

    if (!customers) {
      return res.status(404).json({
        success: false,
        message: "customers not found",
      });
    }

    return res.status(201).json({
      success: true,
      customers: customers,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "error occur",
    });
  }
};

exports.customer = (req, res) => {
  res.send(`GET request for a specific customer - id${req.params.customerID}`);
};

exports.customerUpdate = (req, res) => {
  res.send(`PUT request for a specific supplier - id${req.params.customerID}`);
};

exports.customerDelete = (req, res) => {
  res.send(
    `Delete request for a specific supplier - id${req.params.customerID}`
  );
};
