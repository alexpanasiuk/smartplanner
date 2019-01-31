const express = require('express');
const router = express.Router();
const DB_ERROR_CODE = 500;

// Include middleware
const { auth } = require('../middleware/auth');

// Include models
const { Project } = require('../models/project');

// =========== POST ===============

router.post('/addTask', auth, (req, res) => {
    const {name, creator, finishTime, finished, projectId} = req.body;

    Project.findById(projectId)
        .then(project => {
            project.tasks.push({
                name,
                creator,
                finishTime,
                finished
            });

            return project.save();
        })

        .then(project => {
            res.json({
                success: true,
                project: project
            })
        })

        .catch(err => {
            console.log(err);
            return res.sendStatus(DB_ERROR_CODE);
        });
});

// =========== UPDATE ===============

router.post('/updateTask', auth, (req, res) => {
    const {name, creator, finishTime, finished, timeSetted, projectId, taskId} = req.body;
    Project.findOneAndUpdate(
        {'_id': projectId , 'tasks._id': taskId},
        {   '$set': {
                'tasks.$.name': name,
                'tasks.$.creator': creator,
                'tasks.$.finishTime': finishTime,
                'tasks.$.timeSetted': timeSetted,
                'tasks.$.finished': finished
            }
        },
        {new: true})
        
        .then( project => {
            res.json({
                success: true,
                project
            })
        })

        .catch (err => {
            console.log(err);
            return res.sendStatus(DB_ERROR_CODE);
        });
});

// ======== DELETE =========

router.delete('/deleteTask', auth, (req, res) => { 
    const {projectId, taskId} = req.body; 
    Project.findOneAndUpdate({
        '_id': projectId },
        {
            $pull: {
                'tasks' :  {'_id': taskId}
            }
        },
        {new: true}
        )
        
        .then( project => {
            res.json({
                success: true,
                project
            })
        })

        .catch (err => {
            console.log(err);
            return res.sendStatus(DB_ERROR_CODE);
        });
});


module.exports = router;