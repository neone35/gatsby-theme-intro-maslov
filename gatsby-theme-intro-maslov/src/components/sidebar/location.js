import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { ProfileType } from "../../types"
import MapChart from "./MapChart"
import ToolTip from "react-portal-tooltip"
import LazyLoad from "react-lazyload"

class Location extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTooltipActive: false,
    }
  }

  showTooltip() {
    this.setState({ isTooltipActive: true })
  }
  hideTooltip() {
    this.setState({ isTooltipActive: false })
  }

  render() {
    return (
      <div>
        {/* map */}
        {/* <div className="object-cover h-auto w-full mt-2">
          <LazyLoad>
            <MapChart />
          </LazyLoad>
        </div> */}
        {/* marker with location */}
        <div
          id="marker-container"
          role="menuitem"
          tabIndex={0}
          className="inline-flex items-center bg-front w-full rounded-full overflow-hidden mt-2"
        >
          <span className="text-lead border-r-2 border-back px-3">
            <FaMapMarkerAlt className="h-4 w-4" />
          </span>
          <span className="text-back font-header font-bold py-1 px-3 text-lg">
            {this.props.location}
          </span>
        </div>
        {/* availability to relocate */}
        {this.props.relocation && (
          <div className="text-xs uppercase mt-2 font-semibold text-front font-header">
            Available for relocation
          </div>
        )}
        <ToolTip active={this.state.isTooltipActive} position="bottom" parent="#marker-container" tooltipTimeout={150} useHover={false}>
          <div className="object-cover h-auto w-64">
            <LazyLoad>
              <MapChart/>
            </LazyLoad>
          </div>
        </ToolTip>
      </div>
    )
  }
}

Location.propTypes = {
  location: ProfileType.location,
  relocation: ProfileType.relocation,
}

export default Location
