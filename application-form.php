<?php
include('header.php');
$table='applications';
//Courses
$courses=$db_obj->get_results("SELECT id,title_en FROM courses ORDER BY title_en ASC",false);
//Education
$education=$db_obj->get_results("SELECT id,title_en FROM education ORDER BY id ASC",false);
$start_year = 2018;
$last_year = date('Y') - 1;

// Create an array of years from 2018 to last year
$years = range($start_year, $last_year);
//Form submit
if(isset($_POST['submit'])){
  $details['fullname'] = isset($request->post['fullname'])?$request->post['fullname']:"";
  $details['course_id']= isset($request->post['course_id'])?$request->post['course_id']:"";
  $details['course_time']= isset($request->post['course_time'])?$request->post['course_time']:"";
  $details['education_id']= isset($request->post['education_id'])?$request->post['education_id']:"";
  $details['gender']= isset($request->post['gender'])?$request->post['gender']:"";
  $details['course_before'] = isset($request->post['course_before']) ? 1 : 0;
  $details['admission_before'] = isset($request->post['admission_before']) ? 1 : 0;
  $details['prev_course']= isset($request->post['prev_course'])?$request->post['prev_course']:"";
  $details['admission_year']= isset($request->post['admission_year'])?$request->post['admission_year']:"";
  $details['country_id']= isset($request->post['country_id'])?$request->post['country_id']:"";
  $details['aadhar']= isset($request->post['aadhar'])?$request->post['aadhar']:"";
  $details['mail']= isset($request->post['mail'])?$request->post['mail']:"";
  $details['dob']= isset($request->post['dob'])?$request->post['dob']:"";
  $details['contact_no']= isset($request->post['contact_no'])?$request->post['contact_no']:"";
  $details['alternate_contact_no']= isset($request->post['alternate_contact_no'])?$request->post['alternate_contact_no']:"";
  $details['address']= isset($request->post['address'])?$request->post['address']:"";
  $details['permanent_address']= isset($request->post['permanent_address'])?$request->post['permanent_address']:"";
  $details['parent_name']        = isset($request->post['parent_name']) ? $request->post['parent_name'] : "";
$details['parent_contact']     = isset($request->post['parent_contact']) ? $request->post['parent_contact'] : "";
$details['mother_church']      = isset($request->post['mother_church']) ? $request->post['mother_church'] : "";
$details['current_church']     = isset($request->post['current_church']) ? $request->post['current_church'] : "";
$details['pastor_name']       = isset($request->post['pastor_name']) ? $request->post['pastor_name'] : "";
$details['pastor_contact']    = isset($request->post['pastor_contact']) ? $request->post['pastor_contact'] : "";
$details['church_address']    = isset($request->post['church_address']) ? $request->post['church_address'] : "";
$details['fee_contribution']  = isset($request->post['fee_contribution']) ? $request->post['fee_contribution'] : "";

//Admission no.
$year = date('y');
#Master of Divinity (M. Div.) DBSMDIV250149
if($request->post['course_id']=='16'){
  $fetch_data=$db_obj->get_results("SELECT id,admission_no FROM applications WHERE course_id=16 ORDER BY id DESC LIMIT 1");
  if($fetch_data['admission_no']==''){
    $last_num_part = substr('DBSMDIV250149', -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSMDIV'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;

  }else{
    $last_num_part = substr($fetch_data['admission_no'], -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSMDIV'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;
  }
}

#Bachelor of Theology (B.Th.) DBSBTH250112
if($request->post['course_id']=='17'){
  $fetch_data=$db_obj->get_results("SELECT id,admission_no FROM applications WHERE course_id=17 ORDER BY id DESC LIMIT 1");
  if($fetch_data['admission_no']==''){
    $last_num_part = substr('DBSBTH250112', -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSBTH'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;

  }else{
    $last_num_part = substr($fetch_data['admission_no'], -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSBTH'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;
  }
}

#Graduate in Theology (G.Th.) DBSGTH240003
if($request->post['course_id']=='18'){
  $fetch_data=$db_obj->get_results("SELECT id,admission_no FROM applications WHERE course_id=18 ORDER BY id DESC LIMIT 1");
  if($fetch_data['admission_no']==''){
    $last_num_part = substr('DBSGTH250000', -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSGTH'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;

  }else{
    $last_num_part = substr($fetch_data['admission_no'], -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSGTH'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;
  }
}

#Certificate in Theology (C.Th.) DBSCTH250019
if($request->post['course_id']=='19'){
  $fetch_data=$db_obj->get_results("SELECT id,admission_no FROM applications WHERE course_id=19 ORDER BY id DESC LIMIT 1");
  if($fetch_data['admission_no']==''){
    $last_num_part = substr('DBSCTH250019', -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSCTH'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;

  }else{
    $last_num_part = substr($fetch_data['admission_no'], -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSCTH'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;
  }
}

#Diploma in Christian Counseling (DCC) DBSDCC240002
if($request->post['course_id']=='20'){
  $fetch_data=$db_obj->get_results("SELECT id,admission_no FROM applications WHERE course_id=20 ORDER BY id DESC LIMIT 1");
  if($fetch_data['admission_no']==''){
    $last_num_part = substr('DBSDCC250000', -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSDCC'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;

  }else{
    $last_num_part = substr($fetch_data['admission_no'], -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSDCC'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;
  }
}

#Bachelor in Christian Counseling (BCC) DBSBCC240008
if($request->post['course_id']=='21'){
  $fetch_data=$db_obj->get_results("SELECT id,admission_no FROM applications WHERE course_id=21 ORDER BY id DESC LIMIT 1");
  if($fetch_data['admission_no']==''){
    $last_num_part = substr('DBSBCC250000', -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSBCC'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;

  }else{
    $last_num_part = substr($fetch_data['admission_no'], -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSBCC'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;
  }
}

#MA in Counselling Psychology
if($request->post['course_id']=='22'){
  $fetch_data=$db_obj->get_results("SELECT id,admission_no FROM applications WHERE course_id=22 ORDER BY id DESC LIMIT 1");
  if($fetch_data['admission_no']==''){
    $last_num_part = substr('DBSMACP250000', -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSMACP'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;

  }else{
    $last_num_part = substr($fetch_data['admission_no'], -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSMACP'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;
  }
}

#Diploma in Theology (Dip.Th.)
if($request->post['course_id']=='23'){
  $fetch_data=$db_obj->get_results("SELECT id,admission_no FROM applications WHERE course_id=23 ORDER BY id DESC LIMIT 1");
  if($fetch_data['admission_no']==''){
    $last_num_part = substr('DBSDTH250000', -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSDTH'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;

  }else{
    $last_num_part = substr($fetch_data['admission_no'], -4); // e.g., '0149'
    $new_num = intval($last_num_part) + 1;
    // pad with leading zeros to 4 digits
    $new_num_formatted = str_pad($new_num, 4, '0', STR_PAD_LEFT);

    // build final admission number
    $admission_number = 'DBSDTH'. $year . $new_num_formatted;
    $details['admission_no']  = $admission_number;
  }
}

 // Process photo
  if (isset($_FILES['user_photo']) && $_FILES['user_photo']['error'] == 0) {
    if ($_FILES['user_photo']['size'] <= 500 * 1024) {
      $photoTmpName = $_FILES['user_photo']['tmp_name'];
      $photoName = basename($_FILES['user_photo']['name']);
      $photoTarget = 'uploads/' . uniqid() . '_' . $photoName;

      if (move_uploaded_file($photoTmpName, $photoTarget)) {
        echo "<p style='color:green;'>Photo uploaded successfully: $photoTarget</p>";
      } else {
        echo "<p style='color:red;'>Failed to upload photo.</p>";
      }
    } else {
      echo "<p style='color:red;'>Photo file too large! Max 500KB.</p>";
    }
  }

  // Process SSLC file
  if (isset($_FILES['sslc_file']) && $_FILES['sslc_file']['error'] == 0) {
    if ($_FILES['sslc_file']['size'] <= 500 * 1024) {
      $sslcTmpName = $_FILES['sslc_file']['tmp_name'];
      $sslcName = basename($_FILES['sslc_file']['name']);
      $sslcTarget = 'uploads/' . uniqid() . '_' . $sslcName;

      if (move_uploaded_file($sslcTmpName, $sslcTarget)) {
        echo "<p style='color:green;'>SSLC file uploaded successfully: $sslcTarget</p>";
      } else {
        echo "<p style='color:red;'>Failed to upload SSLC file.</p>";
      }
    } else {
      echo "<p style='color:red;'>SSLC file too large! Max 500KB.</p>";
    }
  }

$details['user_photo']    = uniqid() . '_' . $photoName;
$details['sslc_file']  = uniqid() . '_' . $sslcName;
$details               = $db_obj->filter($details);       
//INSERT into DB
$details['date_added']  = $today;
$id = $db_obj->insert($table,$details);
if($id){

    $mail->SetFrom('info@dtsthiruvalla.com', 'Doulos Theological Seminary Thiruvalla Team');
    $mail->AddAddress($request->post['mail'], $request->post['fullname']);
    $mail->Subject = 'Thank you for contacting Doulos Theological Seminary Thiruvalla';

    $thank_you_template = 'Hi '.$request->post['fullname'].",<br><br>\n"
      ."Thank you for contacting us. We have received your message and will get back to you as soon as possible.<br><br>\n"
      .'If you have any urgent queries, feel free to reply to this email.<br><br>'
      .'Thank you!<br>Doulos Theological Seminary Thiruvalla<br>';

    $mail->MsgHTML($thank_you_template);
    $mail->AddReplyTo('info@dtsthiruvalla.com','Doulos Theological Seminary Thiruvalla');

    $mail->send();


    $msg='<div class="success_msg">Thank you for contacting us. We have received your application and will get back to you as soon as possible.<span class="cross ccross pull-right" title="Close"><i class="fa fa-times" aria-hidden="true"></i></span>
            </div>';
    $_SESSION['contact_msg']=$msg;
        header('location:'.$root_path.'ApplicationForm');
        exit();
    }
}
?>
 <!-- page title -->
<section class="page-title-section">
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <ul class="list-inline custom-breadcrumb mb-2">
          <li class="list-inline-item"><a class="h2 text-primary font-secondary" href="<?php echo $root_path;?>">Home</a></li>
          <li class="list-inline-item text-white h3 font-secondary nasted">Register Online</li>
        </ul>
        <p class="mb-0">Begin your journey with Doulos Theological Seminary,Thiruvalla</p>
      </div>
    </div>
  </div>
</section>
<!-- /page title -->

<!-- contact -->
<section class="section bg-gray">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <?php if(isset($_SESSION['contact_msg']) && @$msg==''){echo $_SESSION['contact_msg'];unset($_SESSION['contact_msg']);}?>  <br />

        <h2 class="section-title">Application Form</h2>
      </div>
    </div>
    <div class="row">
     <div class="col-lg-12 mb-4 mb-lg-0">
      <div class="alert alert-info" role="alert">
        <ul class="list-styled">
            <li>Online Application Submission with Accurate Information</li>
            <li class="list-inline-item mx-0">Before proceeding with the application, ensure that you have digital copies of your photo, SSLC
            Certificate available on your mobile, laptop, or desktop.</li>
            <li class="list-inline-item mx-0">Failure to provide the necessary digital copies mentioned above will result in your application
            being rejected.</li>
            <li class="list-inline-item mx-0">Please be aware that the acceptance of your application is subject to review.</li>
             <li class="list-inline-item mx-0">You will receive a final confirmation from Doulos regarding your admission.</li>
              <li class="list-inline-item mx-0">If you have any questions about the online application process, please feel free to contact us at
           +91 9630426566, +91 9847599603, +91 9447515704.</li>
          </ul>
      </div>
      </div>
    </div>
    <form  id="application-form" method="POST" class="row" enctype="multipart/form-data">
      <div class="col-lg-12">

        <h3 class="section-title">Course Information</h3>
      </div>
      <div class="col-lg-6 mb-4 mb-lg-0">
          <input type="text" class="form-control mb-3" id="fullname" name="fullname" placeholder="Your Full Name *" required>
      </div>
      <div class="col-lg-6 mb-4 mb-lg-0">
        <div class="row">
          <div class="col-lg-6 mb-4 mb-lg-0">
            <select class="form-control mb-3" name="course_id" required id="course_id" title="Select your course">
              <option value="">Select Your Course *</option>
              <?php foreach($courses as $course) { ?>
                <option value="<?php echo $course['id']; ?>"><?php echo $course['title_en']; ?></option>
              <?php } ?>
            </select>
          </div>
          <div class="col-lg-6 mb-4 mb-lg-0">
            <select name="course_time" id="course_time" class="form-control mb-3" required>
              <option value="" disabled selected>Select Time/Batch *</option>
            </select>
          </div>
        </div>
      </div>
       <div class="col-lg-6 mb-4 mb-lg-0">
          <select class="form-control mb-3" name="education_id" required="" id="education_id" initial-state="required">
            <option value="">Select Your Higher Education *</option>
            <?php foreach($education AS $edu){?>
            <option value="<?php echo $edu['id'];?>"><?php echo $edu['title_en'];?></option>
            <?php }?>
          </select>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0">
        <select class="form-control mb-3" name="gender" required="" id="gender" initial-state="required">
            <option value="">Select Your Gender *</option>
            <option value="male">Male</option>
            <option value="female">Female </option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0">
           <input class="form-control-checkbox mb-3" type="checkbox" id="course_before" name="course_before">
          <label class="form-control-checkbox form-check-label" for="course_before">
             Have you Done Any Biblical Course Before?
          </label>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0">
         <input class="form-control-checkbox mb-3" type="checkbox" id="admission_before" name="admission_before">
          <label class="form-control-checkbox form-check-label" for="admission_before">
              Have you already taken admission?
          </label>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0" id="textbox_container" style="display: none;">
          <input type="text" class="form-control mb-3" id="contact_no" name="prev_course" placeholder="Describe your biblical course">
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0" id="select_container" style="display: none;">
           <select name="admission_year" class="form-control mb-3" data-toggle="country" data-country="India" id="country-side">
            <option value="">Admission Year</option>
            <?php foreach($years as $year) {?>
            <option value="<?php echo $year;?>"><?php echo $year;?></option>
            <?php }?>
          </select>
        </div>
         <div class="col-lg-6 mb-4 mb-lg-0">
         <select name="country_id" class="form-control mb-3" data-toggle="country" data-country="India" required="" id="country-side">
            <option value="">Select Nationality *</option>
            <?php foreach($countries AS $country){?>
            <option value="<?php echo $country['id'];?>" <?php if($country['id']=='99'){ echo "Selected";}?>><?php echo $country['name_en'];?></option>
            <?php }?>
          </select>
          </div>
          <div class="col-lg-6 mb-4 mb-lg-0">
          <input class="form-control mb-3" required="" id="aadhar1" type="text" name="aadhar" placeholder="Your aadhar card number *">
          </div>
          <div class="col-lg-6 mb-4 mb-lg-0">
          <input type="email" class="form-control mb-3" id="mail" name="mail" placeholder="Your Email *" required>
          </div>
          <div class="col-lg-6 mb-4 mb-lg-0">
           <input type="text" name="dob" class="form-control mb-3" id="dob" placeholder="Date of Birth *" required autocomplete="off">
          </div>
          <div class="col-lg-6 mb-4 mb-lg-0">
          <input type="number" class="form-control mb-3" id="contact_no" name="contact_no" placeholder="Your Contact Number *" required>
          </div>
          <div class="col-lg-6 mb-4 mb-lg-0">
           <input type="number" class="form-control mb-3" id="alternate_contact_no" name="alternate_contact_no" placeholder="Your Alternate Contact Number">
           </div>
           <div class="col-lg-6 mb-4 mb-lg-0">
          <textarea name="address" id="address" class="form-control mb-3" placeholder="Your Communication Address *" required></textarea>
          </div>
          <div class="col-lg-6 mb-4 mb-lg-0">
          <textarea name="permanent_address" id="permanent_address" class="form-control mb-3" placeholder="Permanent Address"></textarea>
          </div>

         <div class="col-lg-12">
          <h3 class="section-title">Parent Information</h3>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0">
            <input type="text" class="form-control mb-3" id="parent_name" name="parent_name" placeholder="Name of the parent *" required>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0">
            <input type="number" class="form-control mb-3" id="parent_contact" name="parent_contact" placeholder="Contact no. of the parent *" required>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0">
            <input type="text" class="form-control mb-3" id="mother_church" name="mother_church" placeholder="Name of your mother church *" required>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0">
            <input type="text" class="form-control mb-3" id="current_church" name="current_church" placeholder="Name of the current church *" required>
        </div>
           <div class="col-lg-6 mb-4 mb-lg-0">
            <input type="text" class="form-control mb-3" id="pastor_name" name="pastor_name" placeholder="Name of the Pastor *" required>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0">
            <input type="number" class="form-control mb-3" id="pastor_contact" name="pastor_contact" placeholder="Contact no. of the Pastor *" required>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0">
            <textarea name="church_address" id="church_address" class="form-control mb-3" placeholder="Church Address"></textarea>
        </div>

         <div class="col-lg-12">
          <h3 class="section-title">Upload Document</h3>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0">
         <label class="form-label">Upload Your Photo (Max Size:500Kb) *</label>
         <div class="file-drop-area">
            <span>Click or drag file here to upload</span>
            <input type="file" name="user_photo" accept="image/*" required onchange="showPreview(event)">
          </div>
          <div class="preview" id="previewArea"></div>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0">
           <label class="form-label">Upload SSLC Certificate (Max Size: 500Kb) *</label>
          <div class="file-drop-area">
            <span>Click or drag file here to upload</span>
            <input type="file" name="sslc_file" accept=".pdf,image/*" required onchange="validateAndPreview(event, 'sslcPreview')">
          </div>
          <div class="preview" id="sslcPreview"></div>
        </div>
        <div class="col-lg-6 mb-4 mb-lg-0">
            <input type="number" class="form-control mb-3" id="fee_contribution" name="fee_contribution" placeholder="Fee Contribution">
        </div>
        <div class="col-lg-12 mb-4 mb-lg-0">
          <button type="submit" name="submit" value="submit" class="btn btn-primary">SUBMIT</button>
        </div>
      </div>
    </form>
  </div>
</section>
<!-- /contact -->
<?php
include('footer.php');
?>
<script type="text/javascript">
  $(document).ready(function () {
    $('#dob').datepicker({
      format: 'yyyy-mm-dd',
      endDate: '0d',
      autoclose: true,
      todayHighlight: true
    });
  });
  function showPreview(event) {
  var file = event.target.files[0];
  if (file && file.size <= 500 * 1024) { // check size <= 500KB
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('previewArea').innerHTML = '<img src="' + e.target.result + '" width="150">';
    }
    reader.readAsDataURL(file);
  } else {
    alert('File too large! Max size: 500KB');
    event.target.value = ''; // clear input
    document.getElementById('previewArea').innerHTML = '';
  }
}

function validateAndPreview(event, previewId) {
  var file = event.target.files[0];
  if (file && file.size <= 500 * 1024) {
    if (file.type.startsWith('image/')) {
      var reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById(previewId).innerHTML = '<img src="' + e.target.result + '" width="150">';
      }
      reader.readAsDataURL(file);
    } else if (file.type === 'application/pdf') {
      document.getElementById(previewId).innerHTML = '<span>PDF Selected: ' + file.name + '</span>';
    }
  } else {
    alert('File too large! Max size: 500KB');
    event.target.value = '';
    document.getElementById(previewId).innerHTML = '';
  }
}
  $("#application-form").validate({
    ignore : "",
    rules: {
      mail:{
         required:true,
         email:true,
      },
      fullname : "required",
      course_id: "required",
      course_time: "required",
      education_id: "required",
      gender: "required",
      country_id: "required",
      aadhar: "required",
      dob: "required",
      contact_no: "required",
      address: "required",
      parent_name: "required",
      parent_contact: "required",
      mother_church: "required",
      current_church: "required",
      pastor_name: "required",
      pastor_contact: "required",
      user_photo: "required",
      sslc_file: "required",
    },
    messages: {
        fullname: "Full name is required.",
        course_id: "Course name is required.",
        course_time: "Course time/batch is required.",
        education_id: "Please select your education",
        gender: "Please select your gender",
        country_id: "Please select your nationality",
        aadhar: "Your aadhar number is required.",
        mail: "Your email id is required.",
        dob: "Please select your DOB",
        contact_no: "Your contact no. is required",
        address: "Your address is required",
        parent_name: "Your parent name is required",
        parent_contact: "Your parent contact no. is required",
        mother_church: "Your mother church name is required",
        current_church: "Your current church name is required",
        pastor_name: "Your pastor name is required",
        pastor_contact: "Your pastor contact no. is required",
        user_photo: "Please upload your photo",
        sslc_file: "Please upload your SSLC Certificate",
         }
});
$(document).ready(function(){
    $('#course_id').change(function(){
        var courseId = $(this).val();
        if(courseId){
            $.ajax({
                type: 'POST',
                url: 'get_course_times.php',  // PHP file to process the request
                data: {course_id: courseId},
                success: function(html){
                    $('#course_time').html(html);
                }
            }); 
        }else{
            $('#course_time').html('<option value="">Select Time/Batch *</option>'); 
        }
    });
});
$(document).ready(function(){
  $('#course_before').change(function(){
    if($(this).is(':checked')){
      $('#textbox_container').show();
    } else {
      $('#textbox_container').hide();
    }
  });
  $('#admission_before').change(function(){
    if($(this).is(':checked')){
      $('#select_container').show();
    } else {
      $('#select_container').hide();
    }
  });
});
</script>