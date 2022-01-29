import React, { createRef, useEffect } from 'react';
import { connect } from 'react-redux';

const Players = ({players, addStarting, addReplacement}) => {



  return (
      <section>
          <h2>Players</h2>
          <div className="players-container">
              {
                players.map(p => (
                  <article className='players' key={p.id}>
                    <img src={p.img} alt={p.name} />
                    <h3>{p.name}</h3>
                    <div>
                      <button onClick={() => addStarting(p)}>Starting</button>
                      <button onClick={() => addReplacement(p)}>Replacement</button>
                    </div>
                  </article>
                ))
              }
          </div>
      </section>
  );
};

const mapStateToProps = state => ({
  players: state.players
})

const mapDispatchToProps = dispatch => ({
  addStarting(player) {
    dispatch({
      type: "ADD_STARTING",
      player
    })
  },
  addReplacement(player){
    dispatch({
      type: "ADD_REPLACEMENT",
      player
    })
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Players);
