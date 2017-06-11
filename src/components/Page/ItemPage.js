import React, { PropTypes } from 'react';
import { Link/*, IndexLink*/ } from 'react-router';
// import FundamentalsView from '../FundamentalsView';

class ItemPage extends React.Component {

  componentDidMount() {
    const { params, actions } = this.props;
    // console.log('hi there', params.category, params.item, params.detail, actions);
    if (params.detail) { //ToDo update fundamentals on location change
     actions.loadItem(params.category, params.item, params.detail);
    }
  }

  // componentWillReceiveProps(nextProps) {
    // const { params, actions } = this.props;
    // //    console.log('willRecieve TEST');
    // // console.log('hi there', params.category, params.item);
    // if (/*params.item != nextProps.params.item ||*/ params.detail != nextProps.params.detail) {
//
    //   actions.loadDetail(params.category, nextProps.params.item, nextProps.params.detail);
    // }
  // }

  render(){
    const { category, item, detail } = this.props.params;
    const { itemData, language } = this.props;
    // console.log('itemData', item, itemData ? 'has' : 'not');
    return (
      <div>
        <div className={`${category} ${item} item-menu`}>
          <span className="itemName">{item}</span>

          {
            itemData?
              itemData.map((subitem, index) =>{
                return (
                  <Link
                    key={index}
                    to={`/${category}/${item}/${subitem.EN}`}
                    activeClassName="active"
                  >
                    { subitem[language.active] }
                  </Link>
                );
              })
              : ''
          }
        </div>
        <div>
          {
            itemData?
              itemData.map((subitem, index) =>{

                if(subitem.EN === detail) {
                  return (
                    <div key={index}>
                      { subitem.article[language.active] }
                    </div>
                  );
                }
              })
              : 'error loading data'

          }
        </div>
      </div>
    );
  }
}

ItemPage.propTypes = {
  params: PropTypes.object,
  actions: PropTypes.object,
  language: PropTypes.object,
  itemData: PropTypes.array,
  detail: PropTypes.string, // toDo make it an Object
};

export default ItemPage;
