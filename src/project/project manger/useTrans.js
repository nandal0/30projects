import { useContext } from 'react';
import { TrackerContext } from './componets/context/context';

import { incomeCategories, expenseCategories, resetCategories } from './componets/Main/Category';

const useTrans = (title) => {
    console.log(title);
  resetCategories();
  const { state } = useContext(TrackerContext);
  const rightTransactions = state.filter((t) => t.type === title);
  const total = rightTransactions.reduce((acc, currVal) => acc += currVal.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expenseCategories;
console.log(categories);
console.log(rightTransactions);
  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    console.log(category);
    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type),
  };
console.log({filteredCategories, total, chartData});

  return { filteredCategories, total, chartData };
};

export default useTrans;