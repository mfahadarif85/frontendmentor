import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl font-bold'>
        <span className=' underline decoration-wavy'>Front End Mentor</span>{" "}
        Challenges
      </h1>
      <ul className='mt-4 list-inside list-decimal'>
        <li>
          <Link href='/prod-prev-card'>Product Preview Card</Link>
        </li>
        <li>
          <Link href='/results-sum'>Results Summary Component</Link>
        </li>
      </ul>
    </div>
  );
}
