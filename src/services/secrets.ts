import { config } from "../utils";
import { TransportOptionz } from "./dto";

export class DeplonoSecretService {
    static secure(secret: string): string {
        return `${secret}  `;
    }


/**
 * Prepare TransportOptionz payload used as secret credentials
 */
  static setInputSecrets = (): TransportOptionz => {
    const {core} = config.gh;
    // set  inputs
    const host = core.getInput('host', {required: true})
    const port = core.getInput('port', {required: true})
    const user = core.getInput('user', {required: true})
    const pass = core.getInput('passcode', {required: true})

    // protect inputs from being logged to console
    core.setSecret(pass)
    core.setSecret(user)
    core.setSecret(port)
    core.setSecret(host)

    // return the payload.
    return {
        host, port:parseInt(port), secure: true, auth: {user, pass}
    };
}
}