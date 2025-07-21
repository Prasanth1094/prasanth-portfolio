const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  longDescription: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['react', 'angular', 'fullstack', 'python', 'javascript', 'nodejs']
  },
  technologies: [{
    type: String,
    required: true
  }],
  features: [{
    type: String,
    required: true
  }],
  image: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  live: {
    type: String,
    required: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  stats: {
    users: String,
    performance: String,
    uptime: String,
    downloads: String,
    stars: String,
    projects: String,
    dataPoints: String,
    charts: String,
    components: String,
    repos: String,
    issues: String,
    accuracy: String,
    contributors: String
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes
projectSchema.index({ category: 1 });
projectSchema.index({ featured: -1, order: 1 });
projectSchema.index({ isActive: 1 });

module.exports = mongoose.model('Project', projectSchema);
