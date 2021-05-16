import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import './directory-menu.scss'
import {selectDirectorySection} from '../../redux/directory/directory.selector'

import MenuItem from '../menu-items/menu-item'

const Directory =({sections})=>(
    <div className="directory-menu">
      {
          sections.map(({id, ...otherSectionsProps})=>{
              return <MenuItem key={id} {...otherSectionsProps} />
          })
      }
    </div>
)

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySection
})

export default connect(mapStateToProps)(Directory);
