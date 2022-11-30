import React from 'react';
import logo from "../../../content/images/logo.png"
import { ProfileType } from "../../types"


function logotype(props) {
    let toRender = null;
    if (logo !== null) {
        toRender = (
          <span className="inline-flex w-16 h-16 lg:mt-2">
            <img src={logo} alt="Logo" width="72" height="72" />
          </span>
        );
    } else {
        toRender = (
          <span className="inline-flex w-14 h-14 lg:mt-4 font-header font-bold text-xl justify-center items-center text-center text-front border-2 border-solid border-front rounded-full">
            {props.initials}
          </span>
        );
    }
    return toRender;
}

logotype.propTypes = {
    initials: ProfileType.initials,
    logotype: ProfileType.logotype,
};

export default logotype;
