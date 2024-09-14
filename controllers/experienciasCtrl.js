const experiencias = [];

exports.getAllExperiences = (req, res) => {
    res.json(experiencias);
};

exports.createExperience = (req, res) => {
    const newExperience = req.body;
    experiencias.push(newExperience);
    res.status(201).json(newExperience);
};

exports.updateExperience = (req, res) => {
    const id = req.params.id;
    const updatedExperience = req.body;
    experiencias[id] = updatedExperience;
    res.json(updatedExperience);
};

exports.deleteExperience = (req, res) => {
    const id = req.params.id;
    experiencias.splice(id, 1);
    res.status(204).send();
};
