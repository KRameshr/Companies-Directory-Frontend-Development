import Company from "../models/Company.js";
const companyController = {
  getCompanies: async (req, res) => {
    try {
      const filters = {};
      if (req.query.industry) {
        filters.industry = { $regex: new RegExp(req.query.industry, "i") };
      }
      if (req.query.location) {
        filters.location = { $regex: new RegExp(req.query.location, "i") };
      }
      if (req.query.tech) {
        filters.techStack = { $regex: new RegExp(req.query.tech, "i") };
      }

      const companies = await Company.find(filters)
        .sort({ name: 1 })
        .limit(150);
      res.status(200).json(companies);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  getCompanyById: async (req, res) => {
    try {
      const company = await Company.findById(req.params.id);
      if (!company)
        return res.status(404).json({ message: "Company not found" });
      res.status(200).json(company);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },
  createCompany: async (req, res) => {
    try {
      const newCompany = new Company(req.body);
      const savedCompany = await newCompany.save();
      res.status(201).json(savedCompany);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },
  updateCompany: async (req, res) => {
    try {
      const updatedCompany = await Company.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedCompany)
        return res.status(404).json({ message: "Company not found" });
      res.status(200).json(updatedCompany);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },
  deleteCompany: async (req, res) => {
    try {
      const deletedCompany = await Company.findByIdAndDelete(req.params.id);
      if (!deletedCompany)
        return res.status(404).json({ message: "Company not found" });
      res.status(200).json({ message: "Company deleted successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  },
};

export default companyController;
