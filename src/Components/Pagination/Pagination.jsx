import React from 'react';

function Pagination({ props }) {
    const selectHandler = (e) => {
      if (e >= 3 || e <=1) {
        props.setNext(true);
        props.setPervious(false);
      }
      else if (e <= 1 || e >= 3) {
        props.setPervious(true);
        props.setNext(false);
      }
      props.setPage(e);
    }

    const perviousPage = (e) => {
      if (e <= 1) {
        props.setPervious(true);
        props.setNext(false);
      }
      props.setPage(e == 0 ? e + 1 : e);
    }

    const nextPage = (e) => {
      if (e >= 3) {
        props.setNext(true);
        props.setPervious(false);
      }
      props.setPage(e == 4 ? e - 1 : e);
    }
    return (
        <>
            {
                props.data?.length > 0 &&
                <div className="paginationContainer">
                    <span style={{ paddingRight: '10px', cursor: 'pointer' }} className={props.pervious ? 'd-none' : ''} onClick={() => perviousPage(props.page - 1)}>Pervious</span>
                    {
                        [...Array(props.data.length / 10)].map(function (_, i) {
                            return (
                                <span className="pagination" key={i} onClick={() => selectHandler(i + 1)}>{i + 1}</span>
                            )
                        })
                    }
                    <span style={{ paddingLeft: '10px', cursor: 'pointer' }} className={props.next ? 'd-none' : ''} onClick={() => nextPage(props.page + 1)}>Next</span>
                </div>
            }
        </>
    )
}

export default Pagination