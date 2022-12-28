const asyncHandler = require('express-async-handler');

//@desc Get goals
//@route GET/api/goals
//@access Private
const getGoals = asyncHandler(async (req,res) =>{
    res.status(200).json({message:'Get Goals'})
})

//@desc Set goal
//@route SET/api/goals
//@access Private
const setGoal = asyncHandler(async (req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message:'Set Goal'})
})



//@desc Update goal
//@route UPDATE/api/goals/:id
//@access Private
const updateGoal = asyncHandler(async (req,res) =>{
    res.status(200).json({message:`Update Goal ${req.params.id}`})
})


//@desc delete goal
//@route DELETE/api/goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req,res) =>{
    res.status(200).json({message:`Delete Goal ${req.params.id}`})
})




module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}