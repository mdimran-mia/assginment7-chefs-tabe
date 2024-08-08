import { useState } from 'react';
import './Cart.css'
import PropTypes from 'prop-types'
import { useEffect } from 'react';
const Cart = ({ wantsToCook, currentlyCookingItem, handlePreparingButton, handleToDelivered }) => {

    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);

    useEffect(() => {
        const calculateTotals = () => {
            const totals = currentlyCookingItem.reduce(
                (acc, item) => {
                    return {
                        time: acc.time + item.preparing_time,
                        calories: acc.calories + item.calories,
                    };
                },
                { time: 0, calories: 0 }
            );

            setTotalTime(totals.time);
            setTotalCalories(totals.calories);
        };

        calculateTotals();
    }, [currentlyCookingItem]);

    return (
        <div className='cart-container'>
            <div className='want-to-cook'>
                <h2 className='heading'>Want to cook: {wantsToCook.length}</h2>
                <table>
                    <thead>
                        <th className='sl'></th>
                        <th className='name'>Name</th>
                        <th className='time'>Time</th>
                        <th className='calories'>Calories</th>
                        <th className='button'></th>
                    </thead>
                    <tbody>
                        {
                            wantsToCook.map((item, id) =>

                                <tr key={id}>
                                    <td className='sl'>{id + 1}</td>
                                    <td className='name'>{item.recipe_name}</td>
                                    <td className='time'>{item.preparing_time} minute</td>
                                    <td className='calories'>{item.calories} Calories</td>
                                    <td className='button'>
                                        <button className='btn-preparing' onClick={() => handlePreparingButton(item)}>Preparing</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className='currently-cooking'>
                <h2 className='heading'>Currently cooking: {currentlyCookingItem.length}</h2>
                <table>
                    <thead>
                        <th className='sl'></th>
                        <th className='name'>Name</th>
                        <th className='time'>Time</th>
                        <th className='calories'>calories</th>
                        <th className='button'></th>
                    </thead>
                    <tbody>
                        {
                            currentlyCookingItem.map((item, id) =>

                                <tr key={id}>
                                    <td className='sl'>{id + 1}</td>
                                    <td className='name'>{item.recipe_name}</td>
                                    <td className='time'>{item.preparing_time} minute</td>
                                    <td className='calories'>{item.calories} calories</td>
                                    <td className='button'>
                                        <button className='btn-preparing' onClick={() => handleToDelivered(item)}>Delivered</button>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className='totals-container'>
                <p className='font-semibold'>Total Time: {totalTime} minutes</p>
                <p className='font-semibold'>Total Calories: {totalCalories} Calories</p>
            </div>

        </div>
    );
};

Cart.propTypes = {
    wantsToCook: PropTypes.array.isRequired,
    handlePreparingButton: PropTypes.func.isRequired,
    currentlyCookingItem: PropTypes.array.isRequired,
    handleToDelivered: PropTypes.func.isRequired
}

export default Cart;