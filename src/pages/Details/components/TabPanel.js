import React from 'react'
import Box from '@material-ui/core/Box'

const TabPanel = (props) => {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `simple-tabpanel-${index}` }
            aria-labelledby={ `simple-tab-${index}` }
        >
            {value === index && (
                <Box pt={ 2 }>
                    { children }
                </Box>
            ) }
        </div>
    )
}

export default TabPanel
