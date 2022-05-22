<?php
session_start();
include 'connection.php';
 
$query=mysqli_query($connection,"SELECT * FROM student");
 
if($_SESSION['success']=='success')
{
    echo 'Data has been saved successfully';
    $_SESSION['success']='';
}
?>
<table border="1">
<tr>
    <td>#</td>
    <td>ID</td>
    <td>Name</td>
    <td>Roll</td>
    <td>Department</td>
    <td>Delete</td>
    <td>Edit</td>
</tr>
 
<?php
$serial=1;
while($row=mysqli_fetch_array($query))
{
$id=$row['id'];
    ?>
    <tr>
    <td><?php echo $serial++?></td>
    <td><?php echo $row['id']?></td>
    <td><?php echo $row['name']?></td>
    <td><?php echo $row['roll']?></td>
    <td><?php echo $row['department']?></td>
    <td>
        <a href="delete.php?id=<?php echo $id?>">Delete</a>
    </td>
    <td>
        <a href="edit.php?id=<?php echo $id?>">Edit</a>
    </td>
</tr>
    <?php
}
?>
</table>
