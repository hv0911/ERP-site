const Transfer = require("../models/TransferModel/Transfer");

exports.Transaction = (req, res) => {
  const {
    date,
    payment_form,
    narration,
    payment_form_account,
    payment_to,
    amount,
  } = req.body;

  const newTransaction = new Transfer({
    date: date,
    payment_form: payment_form,
    narration: narration,
    payment_from_account: payment_form_account,
    payment_to: payment_to,
    amount: amount,
  });

  newTransaction.save();

  return res.status(201).json({
    success: true,
    transfer: newTransaction,
  });
};




exports.TransferList = async (req, res) => {
  try {
    const transferList = await Transfer.find({});
    if (!transferList) {
      return res.status(404).json({
        success: false,
        messagse: "no transaction",
      });
    }

    return res.status(201).json({
      success: true,
      transferList,
    });
  } catch (error) {
    return res.status(201).json({
      success: false,
      error,
    });
  }
};


exports.transfer = async(req,res)=>{

const transfer = await Transfer.findById(req.params.Id);

if(!transfer){
  return res.status(201).json({
    success:false,
    messagse:"not found",
  })
}

return res.status(201).json({
  success:true,
  transfer:transfer
});

}