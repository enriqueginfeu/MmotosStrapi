'use strict';

/**
 * casco service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::casco.casco');
