import React, { useState, useContext, useEffect } from "react";
import styled from 'styled-components'
import { BsContext } from "../stateManager/stateManager";
import { update_board_hit, update_board_miss } from "../logic/logic";
import { SINK, SHIP_PART, HIT, MISS } from "../stateManager/stateManager";
import UserPixel from "./UserPixel";
import { GridWrapper, PlayerGrid, GridHeaders, LittleWrapper, LettersBar, NumbersBar, BarPixel } from "../styles/GlobalStyles";
import ProgressBar from '@ramonak/react-progress-bar';

const UserGrid = () => {
  const {
    player_board,
    set_player_board,
    player_ships,
    player_is_ready,
    user_precents,
    set_user_precents,
    other_player_guess,
    both_players_connected,
    lock_other_player_board,
    both_players_ready
  } = useContext(BsContext)

  // *** for reordering ships functionality (Not implemented yet)
  const [lock_ship_position, set_lock_ship_position] = useState(false);

  // *** lock the user's ship when ready after reordering (Not implemented yet)
  useEffect(() => {
    set_lock_ship_position(true)
  }, [player_is_ready])

  // *** we are reusing this pure function in OpponentGrid - worth moving to Logic.
  // return the player's guess result (hit, miss...)
  const pixelStatus = (x, y, board, ships) => {
    const pixel = board[x][y];
    if (ships && pixel.value === SHIP_PART) {
      return ships[pixel.ship_index].is_sunk ? SINK : pixel.is_hit ? HIT : pixel.value;
    }
    return pixel.value;
  }

  // updating the player's board according to the other player's guess
  useEffect(() => {
    if (other_player_guess) {
      const { result, x, y } = other_player_guess;
      let updated;
      if (result === MISS) {
        updated = update_board_miss(player_board, x, y);
        set_player_board(updated)
      } else if (result === HIT) {
        set_user_precents(user_precents + 1);
        updated = update_board_hit(x, y, player_board[x][y].ship_index, player_board, player_ships)
        // *** need checking out
        set_player_board(updated.board);
        // set_player_ships(updated.ships);
      }
    }
  }, [other_player_guess])

  return (
    <UserGridWrapper both_players_connected={both_players_connected} myturn={lock_other_player_board} both_players_ready={both_players_ready}>
      <GridHeaders>Your Grid</GridHeaders>
      <LittleWrapper>
        <ProgressBar bgcolor="#00FF41" labelColor="grey" completed={user_precents * 5 || 0} width={'30vw'} height={'2vw'} labelSize={'2vw'} />
      </LittleWrapper>
      <NumbersBar>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, i) => <BarPixel key={i}>{num}</BarPixel>)}</NumbersBar>
      <LettersBar>{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((letter, i) => <BarPixel key={i}>{letter}</BarPixel>)}</LettersBar>
      <PlayerGrid>
        {player_board.map((xArr, Xindex, board) =>
          xArr.map((yArr, Yindex) =>
            <UserPixel
              lock={lock_ship_position} // *** for the ship reordering function (Not implemented yet)
              key={`g${Yindex}`}
              status={pixelStatus(Xindex, Yindex, board, player_ships)}
            ></UserPixel>))}
      </PlayerGrid>
    </UserGridWrapper>
  )
};
const UserGridWrapper = styled(GridWrapper)`
@media only screen and (max-width: 600px) {
  {
display: ${props => props.myturn ? 'grid' : 'none' };
${({both_players_connected, both_players_ready }) => both_players_connected && !both_players_ready ? `position: absolute; top: 50vw` : ' ' } 

  }

`
export default UserGrid;