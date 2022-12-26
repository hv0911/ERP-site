const Contact = require("../models/ContactModels/Contact");


exports.getContactPage = (req, res, next) => {

  res.render("pages/contact")

}


exports.createContactPost = async (req, res, next) => {
 

  const newContact = new Contact({

    contact_type: req.body.contact_type,

    name: req.body.name,

    // profile_picture: req.body.profile_picture,

    business_name: req.body.business_name,

    tax_number: req.body.tax_number,

    // opening_balance: req.body.opening_balance,

    // pay_term: req.body.pay_term,

    // pay_term_condition: req.body.pay_term_condition,

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

  newContact.save((err) => {
    if (err) {
      return next(err)
    }
  });

  // return res.send("form submitted");
   
  if (req.body.contact_type === "Customer") {
    console.log(req.body.contact_type)
    return  res.redirect('/customers')
   } else {
     return res.redirect('/suppliers')  
   }

 



  //   return res.status(201).json({
  //     success: true,
  //     contact: newContact,
  //   });
};

// exports.createContactGet = (req, res) => {
//   res.send("GET conatact request");
// };

//    <-- SUPPLIERS -->

exports.getSuppliers = async (req, res) => {
  try {
    let suppliers = await Contact.find({ contact_type: "Supplier" });

    if (!suppliers) {
     return res.render("pages/suppliers" , {title: "Suppliers" ,suppliers:"" })
    }

    return res.status(201).render(
      "pages/suppliers",
      {
        title: "Suppliers",
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
    let customers = await Contact.find({ contact_type: "Customer" });

    if (!customers) {
      return res.status(404).json({
        success: false,
        message: "customers not found",
      });
    }

    return res.render(
      "pages/customers" ,
       {
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
