const Department = require("../models/HRModels/Department");
const Event = require("../models/HRModels/Event");
const Role = require("../models/HRModels/Role");
const Staff = require("../models/HRModels/Staff")


//      <-- STAFF APIs -->

exports.createStaff = async (req, res) => {

    try {

        const staff = new Staff({

            role: req.body.role,

            name: req.body.name,

            email: req.body.email,

            phone: req.body.phone,

            password: req.body.password,

            deparment: req.body.deparment,

            wareHouse: req.body.wareHouse,

            branch: req.body.branch,

            date_of_birth: req.body.date_of_birth,

            current_address: req.body.current_address,

            permanent_address: req.body.permanent_address,

            opening_balance: req.body.opening_balance,

            bank_name: req.body.bank_name,

            branch_name: req.body.branch_name,

            account_name: req.body.account_name,

            account_number: req.body.account_number,

            date_of_join: req.body.date_of_join,

            basic_salary: req.body.basic_salary,

            employment_type: req.body.employment_type,

            provision_type: req.body.provision_type,

        });

        await staff.save((err) => {
            if (err) {
                return next(err)
            }
        });

        return res.status(201).json({
            success: true,
            staff: staff
        })


    } catch (error) {

        return res.status(500).json({
            success: false,
            error,
        })

    }
}

exports.StaffList = async (req, res) => {

    try {

        const staffList = await Staff.find({}, "name email phone role status department branch date_of_join ");

        if (!staffList) {
            return res.status(404).json({
                success: false,
                message: "zero staffs"
            })
        }

        return res.status(201).json({
            success: true,
            staffList: staffList
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            error
        })

    }

}

// Documents Leave Transactions Loan&Advance require 
exports.staffDetail = (req, res) => {
    res.send("STAFF DETAIL - NOT implemented")
}


exports.updateStaff = async (req, res) => {

    try {
        const staff = new Staff({

            role: req.body.role,

            name: req.body.name,

            email: req.body.email,

            phone: req.body.phone,

            password: req.body.password,

            deparment: req.body.deparment,

            wareHouse: req.body.wareHouse,

            branch: req.body.branch,

            date_of_birth: req.body.date_of_birth,

            current_address: req.body.current_address,

            permanent_address: req.body.permanent_address,

            opening_balance: req.body.opening_balance,

            bank_name: req.body.bank_name,

            branch_name: req.body.branch_name,

            account_name: req.body.account_name,

            account_number: req.body.account_number,

            date_of_join: req.body.date_of_join,

            basic_salary: req.body.basic_salary,

            employment_type: req.body.employment_type,

            provision_type: req.body.provision_type,

            _id: req.params.Id,
        });

        await Staff.findByIdAndUpdate(req.params.Id, staff, (err) => {
            if (err) {
                return next(err);
            }
        });

        return res.status(201).json({
            success: true,
            updatedStaff: staff
        })




    } catch (error) {

        return res.status(500).json({
            success: false,
            error,
        })

    }

}


//   <--  ROLE APIs -->
const createRole = async (req, res) => {

    try {

        const role = new Role({
            role_name: {
                type: String,
                required: true,
            },

        });

        role.save((err) => {
            if (err) {
                return next(err);
            }
        });

        return res.status(201).json({
            success: true,
            role: role
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            error
        })

    }

}


const updateRole = async (req, res) => {

    try {

        const role = new Role({
            role_name: {
                type: String,
                required: true,
            },
            _id: req.params.Id
        });

        await Role.findByIdAndUpdate(req.params.Id, role);



        return res.status(201).json({
            success: true,
            updatedRole: role
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            error
        })

    }

}

exports.deleteRole = async (req, res) => {

    try {

        await Role.findByIdAndDelete(req.params.Id, (err) => {
            if (err) {
                return next(err);
            }
        });

        return res.status(201).json({
            success: true,
            message: "role deleted"
        })


    } catch (error) {

        return res.status(500).json({
            success: false,
            error
        })

    }
}



//  <-- DEPARTMENT APIs -->

exports.createDepartment = async (req, res) => {

    try {

        const department = new Department({
            dep_name: req.body.Department,
            details: req.body.details,
            status: req.body.status
        });

        await department.save((err) => {
            if (err) {
                return next(err);
            }
        });

        return res.status(201).json({
            success: true,
            department: department
        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            error
        })

    }

}


exports.departmentList = async (req, res) => {

    try {

        const departmentList = await Department.find({});

        if (!departmentList) {
            return res.status(404).json({
                success: false,
                message: "no department added"
            })
        }

        return res.status(201).json({
            success: true,

        })

    } catch (error) {

        return res.status(500).json({
            success: false,
            error
        })

    }

}

exports.updateDepartment = async (req, res) => {

    try {

        const department = new Department({
            dep_name: req.body.Department,
            details: req.body.details,
            status: req.body.status,
            _id: req.params.Id
        });

        await Department.findByIdAndUpdate(req.params.Id, department, (err) => {
            if (err) {
                return next(err);
            }
        });

        return res.status(201).json({
            success: true,
            department: department,
        });

    } catch (error) {
        return res.status(201).json({
            success: false,
            error,
        })
    }

}

exports.deleteDepartment = async (req, res) => {
    try {

        await Department.findByIdAndDelete(req.params.Id, (err) => {
            if (err) {
                next(err)
            }
        })

        return res.status(201).json({
            success: false,
            error
        })

    } catch (error) {
        return res.status(500), json({
            success: false,
            error
        })
    }
}


// <-- Event APIs -->

exports.createEvent = async(req , res , next )=>{


    try {

        const event = new Event({

            title:req.body.title,
    
            for_whom:req.body.for_whom,
    
            location:req.body.location,
    
            start_date:req.body.start_date,
    
            to_date:req.body.to_date,
    
            description:req.body.description,
    
            // title:req.body.title,
    
        });
    
        event.save((err)=>{
            if(err){
              return next(err) ;
            }
        });
    
       return res.status(201).json({
        success:true,
        event:event
       });
        
    } catch (error) {
        
        return res.status(500).json({
            success:false,
            error
        })

    }

}

exports.EventList = (req , res )=>{
 
    try {

        const eventList = new Event.find({});

        if(!eventList){
            return res.status(404).json({
                success:false,
                message:"no events"
            })
        }
    
        return res.status(201).json({
            success:true,
            eventList:eventList
        })
    
        
    } catch (error) {
        
        return res.status(500).json({
            success:false,
            error
        })
    }
}



exports.updateEvent = async(req , res ,next )=>{

    try {

        const event = new Event({

            title:req.body.title,
    
            for_whom:req.body.for_whom,
    
            location:req.body.location,
    
            start_date:req.body.start_date,
    
            to_date:req.body.to_date,
    
            description:req.body.description,
    
            _id:req.params.Id
            });

            await Event.findByIdAndUpdate(req.params.Id , event , (err)=>{
                if(err){
                    return next(err);
                }
            } );

            return res.status(201).json({
                success:true,
                updatedEvent:event
            })

    } catch (error) {
        
        return res.status(500).json({
            success:false,
            error
        })

    }

}


exports.deleteEvent = async( req , res )=>{
try {
    
    await Event.findByIdAndDelete(req.params.Id , (err)=>{
        if(err){
            next(err);
        }
    });


    return res.status(201).json({
        success:true,
        message:"event deleted"
    })
} catch (error) {
    return res.status(500).json({
        success:false,
        error  
    })
}

}


attendances = [{
   staffN:"Hasrh",
   status:"Present",   
},
{
    staffN:"JOHN",
    status:"Absent"
},

]


//  <-- For Attendance -->

exports.attendance = async( req , res )=>{

    try {
     
        // const attendances = req.body.attendance ;

    await attendances.map((item)=>{
        Staff.updateOne({name:item.staffN} , {$set:{
            attendance:{
                 date:req.body.date,
                 status:attendance.status
            }
         }})
    }).then(
        (success)=>{
            return res.status(201).json({
                success,
                message:"attendance updated"
            })
        }
    )
     
    } catch (error) {
        
        return res.status(500).json({
            success:false,
            error
        })
    }

}