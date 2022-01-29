import React from 'react';
import { connect } from 'react-redux';
import court from '../court.svg';

const Startings = ({startings, removeStarting}) => {
  return (
      <section>
          <h2>Startings</h2>
          <div className="court">
              {
                startings.map(p => (
                    <article className='starting' key={p.id}>
                        <div>
                            <img src={p.img} alt={p.name} />
                            <button onClick={() => removeStarting(p)}>X</button>
                        </div>
                        <p>{p.name}</p>
                    </article>
                ))
              }
              <img src={court} alt="Football court" />
          </div>
      </section>
  );
};

const mapStateToProps = state => ({
    startings: state.startings
});
  
const mapDispatchToProps = dispatch => ({
    removeStarting(player){
        dispatch({
            type: "REMOVE_STARTING",
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Startings);
