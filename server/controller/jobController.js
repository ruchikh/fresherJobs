const Job = require('./../models/Job')

module.exports = {
	addJobs: (req, res) => {
		const newJobs = new Job(req.body)
		newJobs.save((err, jobs) => {
			if(err) res.json({
				err: "Can not add jobs"
			})
				res.json(jobs);
		})
	},

	getAllJobs: (req, res) => {
		Job.find({}, (err, jobs) => {
			if(err) res.json({
				err: "Can not get jobs"
			})
				res.json(jobs)
		})
	}
}


