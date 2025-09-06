// --- Script to insert 500 irregular documents in 10 batches ---

// Batch 1: Unique attribute 'legacy_id'
let batch1 = [];
for (let i = 1; i <= 50; i++) {
    batch1.push({
        studentID: `LGCY${1000 + i}`,
        fullName: `Legacy Student ${i}`,
        legacy_id: `old_sys_${1000 + i}`
    });
}
db.Students.insertMany(batch1);
print("Batch 1 (50 docs with 'legacy_id') inserted.");

// Batch 2: Unique attribute 'financial_aid_status'
let batch2 = [];
for (let i = 1; i <= 50; i++) {
    batch2.push({
        studentID: `FIN${2000 + i}`,
        fullName: `Financial Student ${i}`,
        financial_aid_status: (i % 2 === 0) ? "approved" : "pending"
    });
}
db.Students.insertMany(batch2);
print("Batch 2 (50 docs with 'financial_aid_status') inserted.");

// Batch 3: Unique attribute 'library_card_number'
let batch3 = [];
for (let i = 1; i <= 50; i++) {
    batch3.push({
        studentID: `LIB${3000 + i}`,
        fullName: `Library User ${i}`,
        library_card_number: `CARD-${3000 + i}`
    });
}
db.Students.insertMany(batch3);
print("Batch 3 (50 docs with 'library_card_number') inserted.");

// Batch 4: Unique attribute 'sports_team'
let batch4 = [];
for (let i = 1; i <= 50; i++) {
    batch4.push({
        studentID: `SPT${4000 + i}`,
        fullName: `Athlete Student ${i}`,
        sports_team: (i % 3 === 0) ? "Basketball" : "Soccer"
    });
}
db.Students.insertMany(batch4);
print("Batch 4 (50 docs with 'sports_team') inserted.");

// Batch 5: Unique attribute 'dorm_info' (nested object)
let batch5 = [];
for (let i = 1; i <= 50; i++) {
    batch5.push({
        studentID: `DRM${5000 + i}`,
        fullName: `Dorm Resident ${i}`,
        dorm_info: { building: `D${i % 4 + 1}`, room: 100 + i }
    });
}
db.Students.insertMany(batch5);
print("Batch 5 (50 docs with 'dorm_info') inserted.");

// Batch 6: Unique attribute 'parking_permit_code'
let batch6 = [];
for (let i = 1; i <= 50; i++) {
    batch6.push({
        studentID: `PRK${6000 + i}`,
        fullName: `Commuter Student ${i}`,
        parking_permit_code: `P-2025-${6000 + i}`
    });
}
db.Students.insertMany(batch6);
print("Batch 6 (50 docs with 'parking_permit_code') inserted.");

// Batch 7: Unique attribute 'volunteer_hours'
let batch7 = [];
for (let i = 1; i <= 50; i++) {
    batch7.push({
        studentID: `VOL${7000 + i}`,
        fullName: `Volunteer Student ${i}`,
        volunteer_hours: i * 2
    });
}
db.Students.insertMany(batch7);
print("Batch 7 (50 docs with 'volunteer_hours') inserted.");

// Batch 8: Unique attribute 'alumni_mentor_id'
let batch8 = [];
for (let i = 1; i <= 50; i++) {
    batch8.push({
        studentID: `MTR${8000 + i}`,
        fullName: `Mentee Student ${i}`,
        alumni_mentor_id: `ALUMNI-${80 + i}`
    });
}
db.Students.insertMany(batch8);
print("Batch 8 (50 docs with 'alumni_mentor_id') inserted.");

// Batch 9: Unique attribute 'thesis_submission_date'
let batch9 = [];
for (let i = 1; i <= 50; i++) {
    batch9.push({
        studentID: `THS${9000 + i}`,
        fullName: `Thesis Student ${i}`,
        thesis_submission_date: new Date()
    });
}
db.Students.insertMany(batch9);
print("Batch 9 (50 docs with 'thesis_submission_date') inserted.");

// Batch 10: Unique attribute 'exchange_program_country'
let batch10 = [];
for (let i = 1; i <= 50; i++) {
    batch10.push({
        studentID: `EXC${10000 + i}`,
        fullName: `Exchange Student ${i}`,
        exchange_program_country: "Japan"
    });
}
db.Students.insertMany(batch10);
print("Batch 10 (50 docs with 'exchange_program_country') inserted.");

print("--- Total 500 documents inserted successfully! ---");
