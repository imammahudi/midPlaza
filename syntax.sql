---Number 1 
select date,sum(case WHEN a.score < 0 THEN a.score end) as num_neg_scores ,sum(case WHEN a.score > 0 THEN a.score end) as num_pos_score
from assessments a
where a.date between '2011-03-01' and '2011-04-31'
group by 1
order by 1 asc

--- Number 2
select * from assessments a where a.date between '2011-01-01' and '2011-06-31' and score > 0 group by 1 
order by 1 asc