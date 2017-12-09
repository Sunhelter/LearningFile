select * from 
(select *,ROW_NUMBER() over (partition by Code order by iPriority asc) as rn from TableA)t0
where rn<=(select iMax from Dic where Code=t0.Code)