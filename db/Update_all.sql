select * from pantry_orders as o
inner join (select * from pantry_user_info where user_id = $1 limit 1) as u 
    on o.user_id = u.user_id 