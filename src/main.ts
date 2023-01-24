import core from "@actions/core";
import github from "@actions/github";

import { Deplono } from  "./services";

const type = core.getInput("type") as string;
const credetials = core.getInput("credentials");
/** Extract The main payload */
const data = JSON.stringify(github.context.payload,null,2)
Deplono.run(type, credetials, data);
