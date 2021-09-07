'use strict'

const Fs = require('fs');

const pars = require('./lib/pars');
const tasks = require('./lib/tasks')

const o = Fs.readFileSync('./xml/1.xml')

const obj_from_xml = pars('./xml/1.xml');
const obj_from_bpmn = pars('./xml/Init_project_storm_bpmn_2.bpmn');
const obj_3 = pars('./xml/pr_3.bpmn');
const obj_4 = pars('./xml/pr_4.bpmn');
debugger
